package com.isiran.portal.service;

public class InvalidCaptchaException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public InvalidCaptchaException() {
        super("Incorrect captcha");
    }
}
