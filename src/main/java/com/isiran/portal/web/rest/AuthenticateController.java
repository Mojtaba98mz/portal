package com.isiran.portal.web.rest;

import cn.apiclub.captcha.Captcha;
import com.isiran.portal.config.PortalConstants;
import com.isiran.portal.config.PortalProperties;
import com.isiran.portal.security.dto.JWTToken;
import com.isiran.portal.service.InvalidCaptchaException;
import com.isiran.portal.util.CaptchaUtil;
import com.isiran.portal.util.KeyPairGeneratorUtil;
import com.isiran.portal.web.rest.vm.CaptchaVM;
import com.isiran.portal.web.rest.vm.LoginVM;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.stream.Collectors;

import static com.isiran.portal.security.SecurityUtils.AUTHORITIES_KEY;
import static com.isiran.portal.security.SecurityUtils.JWT_ALGORITHM;

@RestController
@RequestMapping("/api")
public class AuthenticateController {

    private final Logger log = LoggerFactory.getLogger(AuthenticateController.class);

    @Value("${portal.security.authentication.jwt.token-validity-in-seconds:0}")
    private long tokenValidityInSeconds;

    private final JwtEncoder jwtEncoder;

    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private final Environment env;

    private final PasswordEncoder passwordEncoder;
    private final PortalProperties portalProperties;

    public AuthenticateController(JwtEncoder jwtEncoder, AuthenticationManagerBuilder authenticationManagerBuilder, Environment env, PasswordEncoder passwordEncoder, PortalProperties portalProperties) {
        this.jwtEncoder = jwtEncoder;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.env = env;
        this.passwordEncoder = passwordEncoder;
        this.portalProperties = portalProperties;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JWTToken> authorize(@Valid @RequestBody LoginVM loginVM) throws Exception {
        if (env.acceptsProfiles(Profiles.of(PortalConstants.SPRING_PROFILE_PRODUCTION))) {
            loginVM.setPassword(KeyPairGeneratorUtil.decrypt(loginVM.getPassword()));
            if (!passwordEncoder.matches(portalProperties.getCaptchaSalt() + loginVM.getCaptchaAnswer(), loginVM.getEncryptedCaptchaAnswer()))
                throw new InvalidCaptchaException();
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                loginVM.getUsername(),
                loginVM.getPassword()
        );

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = this.createToken(authentication);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setBearerAuth(jwt);
        return new ResponseEntity<>(new JWTToken(jwt), httpHeaders, HttpStatus.OK);
    }

    public String createToken(Authentication authentication) {
        String authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(" "));

        Instant now = Instant.now();
        Instant validity;
        validity = now.plus(this.tokenValidityInSeconds, ChronoUnit.SECONDS);

        // @formatter:off
    JwtClaimsSet claims = JwtClaimsSet.builder()
            .issuedAt(now)
            .expiresAt(validity)
            .subject(authentication.getName())
            .claim(AUTHORITIES_KEY, authorities)
            .build();

    JwsHeader jwsHeader = JwsHeader.with(JWT_ALGORITHM).build();
    return this.jwtEncoder.encode(JwtEncoderParameters.from(jwsHeader, claims)).getTokenValue();
  }

}
