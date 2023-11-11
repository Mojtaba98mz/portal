package com.isiran.portal.web.rest.errors;

import java.net.URI;

public final class ErrorConstants {
    public static final String INVALID_CAPTCHA = "invalid-captcha";
    public static final String INVALID_CREDENTIALS = "invalid-credentials";
    public static final String NOT_ACTIVATED = "user-not-activated";

    public static final String DEFAULT_TYPE = "problem-with-message";

    public static final String LOGIN_ALREADY_USED_TYPE = "login-already-used";
    private ErrorConstants() {}
}
