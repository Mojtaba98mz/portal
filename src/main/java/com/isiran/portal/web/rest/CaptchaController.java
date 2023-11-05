package com.isiran.portal.web.rest;

import cn.apiclub.captcha.Captcha;
import com.isiran.portal.util.CaptchaUtil;
import com.isiran.portal.web.rest.vm.CaptchaVM;
import org.jasypt.encryption.StringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CaptchaController {

    @Autowired
    StringEncryptor encryptor;

    @GetMapping("/captcha")
    public CaptchaVM captcha() {
        Captcha captcha = CaptchaUtil.createCaptcha(200, 70);
        String captchaAnswer = captcha.getAnswer();
        String encryptedAnswer = encryptor.encrypt(captchaAnswer);
        return new CaptchaVM(encryptedAnswer, CaptchaUtil.encodeCaptcha(captcha));
    }

}
