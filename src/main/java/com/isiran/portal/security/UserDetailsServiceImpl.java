package com.isiran.portal.security;

import com.isiran.portal.domain.Role;
import com.isiran.portal.domain.User;
import com.isiran.portal.web.rest.errors.ErrorConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isiran.portal.repository.UserRepository;

import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final Logger log = LoggerFactory.getLogger(UserDetailsServiceImpl.class);
    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(final String login) {

        log.debug("Authenticating {}", login);

        return userRepository
                .findOneWithAuthoritiesByUsername(login)
                .map(user -> createSpringSecurityUser(login, user))
                .orElseThrow(() -> new UsernameNotFoundException("User with email " + login + " was not found in the database"));
    }

    private org.springframework.security.core.userdetails.User createSpringSecurityUser(String lowercaseLogin, User user) {
        if (!user.getActivated()) {
            throw new UserNotActivatedException(ErrorConstants.NOT_ACTIVATED);
        }
        List<SimpleGrantedAuthority> grantedAuthorities = user
                .getAuthorities()
                .stream()
                .map(Role::getName)
                .map(SimpleGrantedAuthority::new)
                .toList();
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorities);
    }

}
