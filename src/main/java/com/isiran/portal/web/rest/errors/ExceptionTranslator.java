package com.isiran.portal.web.rest.errors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * Controller advice to translate the server side exceptions to client-friendly json structures.
 * The error response follows RFC7807 - Problem Details for HTTP APIs (https://tools.ietf.org/html/rfc7807).
 */
@ControllerAdvice
public class ExceptionTranslator extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = com.isiran.portal.service.InvalidCaptchaException.class)
    public ResponseEntity<Object> handleCaptchaException(com.isiran.portal.service.InvalidCaptchaException ex, NativeWebRequest request) {
        return handleExceptionInternal(ex, ErrorConstants.INVALID_CAPTCHA,
                new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

}
