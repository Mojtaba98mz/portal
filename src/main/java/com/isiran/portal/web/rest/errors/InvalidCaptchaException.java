package com.isiran.portal.web.rest.errors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.ErrorResponseException;
public class InvalidCaptchaException extends ErrorResponseException {
    private static final long serialVersionUID = 1L;
    public InvalidCaptchaException() {
        super(HttpStatus.BAD_REQUEST,ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST,"Incorrect captcha"),null);
    }
}
