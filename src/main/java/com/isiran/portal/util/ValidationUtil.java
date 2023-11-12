package com.isiran.portal.util;

import java.util.Arrays;

public class ValidationUtil {

    public static boolean validateMelliCode(String melliCode) {
        String[] identicalDigits = {"0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"};
        if (melliCode.trim().isEmpty()) {
            return false;
        } else if (melliCode.length() != 10) {
            return false;
        } else if (Arrays.asList(identicalDigits).contains(melliCode)) {
            return false;
        } else {
            int sum = 0;
            for (int i = 0; i < 9; i++) {
                sum += Character.getNumericValue(melliCode.charAt(i)) * (10 - i);
            }
            int lastDigit;
            int divideRemaining = sum % 11;
            if (divideRemaining < 2) {
                lastDigit = divideRemaining;
            } else {
                lastDigit = 11 - (divideRemaining);
            }
            return Character.getNumericValue(melliCode.charAt(9)) == lastDigit;
        }
    }
}
