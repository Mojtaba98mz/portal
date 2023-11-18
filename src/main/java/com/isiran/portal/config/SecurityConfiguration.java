package com.isiran.portal.config;

import com.isiran.portal.security.AuthoritiesConstants;
import com.isiran.portal.security.UserDetailsServiceImpl;
import com.isiran.portal.web.filter.SpaWebFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfiguration {
    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    JwtAuthEntryPoint jwtAuthEntryPoint;

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, MvcRequestMatcher.Builder mvc) throws Exception {
        http
                .cors(withDefaults())
                .csrf(csrf -> csrf.disable())
                .addFilterAfter(new SpaWebFilter(), BasicAuthenticationFilter.class)
                .headers(headers ->
                        headers
                                .frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin)
                                .referrerPolicy(referrer -> referrer.policy(ReferrerPolicyHeaderWriter.ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN))
                                .permissionsPolicy(permissions ->
                                        permissions.policy(
                                                "camera=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=()"
                                        )
                                )
                )
                .authorizeHttpRequests(authz ->
                        authz
                                .requestMatchers(mvc.pattern("/index.html"), mvc.pattern("/*.js"), mvc.pattern("/*.map"), mvc.pattern("/*.css"), mvc.pattern("/assets/**")).permitAll()
                                .requestMatchers(mvc.pattern("/*.ico"), mvc.pattern("/*.png"), mvc.pattern("/*.svg"), mvc.pattern("/*.webapp")).permitAll()
                                .requestMatchers(mvc.pattern("/content/**")).permitAll()
                                .requestMatchers(mvc.pattern("/swagger-ui/**")).permitAll()
                                .requestMatchers(mvc.pattern("/v3/api-docs/**")).permitAll()
                                .requestMatchers(mvc.pattern("/swagger-ui.html")).permitAll()
                                .requestMatchers(mvc.pattern("/api/captcha")).permitAll()
                                .requestMatchers(mvc.pattern("/api/publicKey")).permitAll()
                                .requestMatchers(mvc.pattern(HttpMethod.POST, "/api/authenticate")).permitAll()
                                .requestMatchers(mvc.pattern("/api/register")).permitAll()
                                .requestMatchers(mvc.pattern("/api/admin/**")).hasAuthority(AuthoritiesConstants.ADMIN)
                                .requestMatchers(mvc.pattern("/api/**")).authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling(exceptions ->
                        exceptions
                                .authenticationEntryPoint(jwtAuthEntryPoint)
                                .accessDeniedHandler(new BearerTokenAccessDeniedHandler())
                )
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
        return http.build();
    }

    @Bean
    MvcRequestMatcher.Builder mvc(HandlerMappingIntrospector introspector) {
        return new MvcRequestMatcher.Builder(introspector);
    }
}
