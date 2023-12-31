package com.isiran.portal.web.rest.vm;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class LoginVM {

    @NotNull
    @Size(min = 1, max = 50)
    private String username;

    @NotNull
    @Size(min = 4)
    private String password;

    private String captchaAnswer;

    private String encryptedCaptchaAnswer;
}
