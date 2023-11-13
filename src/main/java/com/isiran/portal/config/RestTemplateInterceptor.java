package com.isiran.portal.config;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.isiran.portal.security.dto.JWTToken;
import com.isiran.portal.web.rest.vm.LoginVM;
import com.nimbusds.jose.shaded.gson.Gson;
import com.nimbusds.jwt.JWT;
import com.nimbusds.jwt.JWTParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.oauth2.jwt.JwtDecoder;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.ParseException;
import java.util.Date;

@Configuration
public class RestTemplateInterceptor implements ClientHttpRequestInterceptor {

    private JWT jwtToken;

    private final PortalProperties portalProperties;
    private final ObjectMapper objectMapper;

    public RestTemplateInterceptor(PortalProperties portalProperties, ObjectMapper objectMapper) {
        this.portalProperties = portalProperties;
        this.objectMapper = objectMapper;
    }

    @Override
    @NonNull
    public ClientHttpResponse intercept(
            @NonNull org.springframework.http.HttpRequest request,
            @NonNull byte[] body,
            @NonNull ClientHttpRequestExecution execution) throws IOException {
        synchronized (this) {
            try {
                if (jwtToken == null || jwtToken.getJWTClaimsSet().getExpirationTime().before(new Date())) {
                    jwtToken = getToken();
                }
            } catch (ParseException | InterruptedException e) {
                throw new RuntimeException(e);
            }
            request.getHeaders().add("Authorization", "Bearer " + jwtToken.getParsedString());
        }
        return execution.execute(request, body);
    }

    public JWT getToken() throws IOException, InterruptedException, ParseException {
        LoginVM loginVM = new LoginVM();
        loginVM.setUsername(portalProperties.getRayten().getUsername());
        loginVM.setPassword(portalProperties.getRayten().getPassword());
        HttpClient client = HttpClient.newBuilder().build();
        HttpRequest httpRequest = HttpRequest.newBuilder().POST(HttpRequest.BodyPublishers.ofString(new Gson().toJson(loginVM)))
                .header("Content-Type", "application/json").uri(URI.create(portalProperties.getRayten().getBaseUrl() + "login")).build();
        HttpResponse<String> response = client.send(httpRequest, HttpResponse.BodyHandlers.ofString());
        JWTToken token = objectMapper.readValue(response.body(), JWTToken.class);
        return JWTParser.parse(token.getIdToken());
    }
}
