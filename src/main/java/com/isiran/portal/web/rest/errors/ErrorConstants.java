package com.isiran.portal.web.rest.errors;

import java.net.URI;

public final class ErrorConstants {
    public static final String INVALID_CAPTCHA = "invalid-captcha";
    public static final String INVALID_CREDENTIALS = "invalid-credentials";
    public static final String NOT_ACTIVATED = "user-not-activated";
    public static final String DEFAULT_TYPE = "problem-with-message";
    public static final String LOGIN_ALREADY_USED_TYPE = "login-already-used";
    public static final String INVALID_NATIONAL_CODE = "invalid-national-code";
    public static final String ERR_CONCURRENCY_FAILURE = "error.concurrencyFailure";
    public static final String ERR_VALIDATION = "error.validation";

    private ErrorConstants() {}
}
