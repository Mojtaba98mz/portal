package com.isiran.portal.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.cors.CorsConfiguration;

@ConfigurationProperties(prefix = "portal", ignoreUnknownFields = false)
public class PortalProperties {
    private final Cache cache = new Cache();

    private final Security security = new Security();

    private final CorsConfiguration cors = new CorsConfiguration();

    private final ClientApp clientApp = new ClientApp();

    private final Rayten rayten = new Rayten();

    private String captchaSalt;

    public String getCaptchaSalt() {
        return captchaSalt;
    }

    public void setCaptchaSalt(String captchaSalt) {
        this.captchaSalt = captchaSalt;
    }

    public Cache getCache() {
        return cache;
    }

    public Security getSecurity() {
        return security;
    }

    public CorsConfiguration getCors() {
        return cors;
    }

    public ClientApp getClientApp() {
        return clientApp;
    }

    public Rayten getRayten() {
        return rayten;
    }

    public static class Cache {

        private final Ehcache ehcache = new Ehcache();

        public Ehcache getEhcache() {
            return ehcache;
        }

        public static class Ehcache {

            private int timeToLiveSeconds = PortalDefaults.Cache.Ehcache.timeToLiveSeconds;

            private long maxEntries = PortalDefaults.Cache.Ehcache.maxEntries;

            public int getTimeToLiveSeconds() {
                return timeToLiveSeconds;
            }

            public void setTimeToLiveSeconds(int timeToLiveSeconds) {
                this.timeToLiveSeconds = timeToLiveSeconds;
            }

            public long getMaxEntries() {
                return maxEntries;
            }

            public void setMaxEntries(long maxEntries) {
                this.maxEntries = maxEntries;
            }
        }

    }

    public static class Security {

        private String contentSecurityPolicy = PortalDefaults.Security.contentSecurityPolicy;

        private final Authentication authentication = new Authentication();

        public Authentication getAuthentication() {
            return authentication;
        }

        public String getContentSecurityPolicy() {
            return contentSecurityPolicy;
        }

        public void setContentSecurityPolicy(String contentSecurityPolicy) {
            this.contentSecurityPolicy = contentSecurityPolicy;
        }

        public static class Authentication {

            private final Jwt jwt = new Jwt();

            public Jwt getJwt() {
                return jwt;
            }

            public static class Jwt {

                private String secret = PortalDefaults.Security.Authentication.Jwt.secret;

                private String base64Secret = PortalDefaults.Security.Authentication.Jwt.base64Secret;

                private long tokenValidityInSeconds = PortalDefaults.Security.Authentication.Jwt
                        .tokenValidityInSeconds;

                private long tokenValidityInSecondsForRememberMe = PortalDefaults.Security.Authentication.Jwt
                        .tokenValidityInSecondsForRememberMe;

                public String getSecret() {
                    return secret;
                }

                public void setSecret(String secret) {
                    this.secret = secret;
                }

                public String getBase64Secret() {
                    return base64Secret;
                }

                public void setBase64Secret(String base64Secret) {
                    this.base64Secret = base64Secret;
                }

                public long getTokenValidityInSeconds() {
                    return tokenValidityInSeconds;
                }

                public void setTokenValidityInSeconds(long tokenValidityInSeconds) {
                    this.tokenValidityInSeconds = tokenValidityInSeconds;
                }

                public long getTokenValidityInSecondsForRememberMe() {
                    return tokenValidityInSecondsForRememberMe;
                }

                public void setTokenValidityInSecondsForRememberMe(long tokenValidityInSecondsForRememberMe) {
                    this.tokenValidityInSecondsForRememberMe = tokenValidityInSecondsForRememberMe;
                }
            }
        }
    }

    public static class ClientApp {

        private String name = PortalDefaults.ClientApp.name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public static class Rayten {
        private String username = PortalDefaults.Rayten.username;
        private String password = PortalDefaults.Rayten.password;
        private String baseUrl = PortalDefaults.Rayten.baseUrl;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getBaseUrl() {
            return baseUrl;
        }

        public void setBaseUrl(String baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

}
