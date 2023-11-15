package com.isiran.portal.util;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.security.*;
import java.util.Base64;

public class KeyPairGeneratorUtil {

    private static PublicKey publicKey;
    private static PrivateKey privateKey;

    private KeyPairGeneratorUtil() {
    }

    public static PublicKey getPublicKey() {
        if (publicKey == null)
            initialKey();
        return publicKey;
    }

    public static PrivateKey getPrivateKey() {
        if (privateKey == null)
            initialKey();
        return privateKey;
    }

    private static void initialKey() {
        KeyPairGenerator keyPairGen = null;
        try {
            keyPairGen = KeyPairGenerator.getInstance("RSA");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        keyPairGen.initialize(2048);
        KeyPair keyPair = keyPairGen.generateKeyPair();
        publicKey = keyPair.getPublic();
        privateKey = keyPair.getPrivate();
    }

    public static String decrypt(String encrypted){
        Cipher cipher = null;
        try {
            cipher = Cipher.getInstance("RSA");
        } catch (NoSuchAlgorithmException | NoSuchPaddingException e) {
            throw new RuntimeException(e);
        }
        try {
            cipher.init(Cipher.DECRYPT_MODE, KeyPairGeneratorUtil.getPrivateKey());
        } catch (InvalidKeyException e) {
            throw new RuntimeException(e);
        }
        byte[] bytes = new byte[0];
        try {
            bytes = cipher.doFinal(Base64.getDecoder().decode(encrypted));
        } catch (IllegalBlockSizeException | BadPaddingException e) {
            throw new RuntimeException(e);
        }
        return new String(bytes);
    }
}
