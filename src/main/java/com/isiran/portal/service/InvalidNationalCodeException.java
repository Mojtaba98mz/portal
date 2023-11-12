package com.isiran.portal.service;

public class InvalidNationalCodeException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public InvalidNationalCodeException() {
        super("Incorrect national code");
    }
}
