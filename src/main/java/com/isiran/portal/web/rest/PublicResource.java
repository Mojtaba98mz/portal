package com.isiran.portal.web.rest;

import cn.apiclub.captcha.Captcha;
import com.isiran.portal.config.PortalProperties;
import com.isiran.portal.util.CaptchaUtil;
import com.isiran.portal.util.KeyPairGeneratorUtil;
import com.isiran.portal.web.rest.vm.CaptchaVM;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@RestController
@RequestMapping("/api/public")
public class PublicResource {


    @Value("${spring.profiles.active}")
    private String activeProfile;

    private final PasswordEncoder passwordEncoder;
    private final PortalProperties portalProperties;

    public PublicResource(PasswordEncoder passwordEncoder, PortalProperties portalProperties) {
        this.passwordEncoder = passwordEncoder;
        this.portalProperties = portalProperties;
    }

    @GetMapping("/activeProfile")
    public String getActiveProfile() {
        return this.activeProfile;
    }

    @GetMapping("/captcha")
    public CaptchaVM captcha() {
        Captcha captcha = CaptchaUtil.createCaptcha(200, 70);
        String captchaAnswer = captcha.getAnswer();
        String hashedAnswer = passwordEncoder.encode(portalProperties.getCaptchaSalt() + captchaAnswer);
        return new CaptchaVM(hashedAnswer, CaptchaUtil.encodeCaptcha(captcha));
    }

    @GetMapping("/publicKey")
    public String publicKey() {
        return new String(Base64.getEncoder().encode(KeyPairGeneratorUtil.getPublicKey().getEncoded()));
    }
}
