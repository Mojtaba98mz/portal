package com.isiran.portal.web.rest.vm;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CaptchaVM {
    private String answer;
    private String image;
}
