package com.isiran.portal.service;

import com.isiran.portal.domain.QUser;
import com.isiran.portal.domain.Role;
import com.isiran.portal.domain.User;
import com.isiran.portal.repository.RoleRepository;
import com.isiran.portal.repository.UserRepository;
import com.isiran.portal.security.AuthoritiesConstants;
import com.isiran.portal.security.SecurityUtils;
import com.isiran.portal.security.dto.AdminUserDTO;
import com.isiran.portal.service.criteria.UserCriteria;
import com.isiran.portal.util.KeyPairGeneratorUtil;
import com.isiran.portal.util.ValidationUtil;
import com.isiran.portal.web.rest.vm.ManagedUserVM;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.CacheManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Service class for managing users.
 */
@Service
public class UserService /*extends QueryService<User>*/ {

    private final Logger log = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final RoleRepository roleRepository;

    private final CacheManager cacheManager;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            RoleRepository roleRepository,
            CacheManager cacheManager
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.cacheManager = cacheManager;
    }


    public User createUser(ManagedUserVM userVM) {
        if (!ValidationUtil.validateMelliCode(userVM.getUsername())) {
            throw new InvalidNationalCodeException();
        }
        User user = new User();
        user.setUsername(userVM.getUsername().toLowerCase());
        user.setFirstName(userVM.getFirstName());
        user.setLastName(userVM.getLastName());
        String encryptedPassword = passwordEncoder.encode(userVM.getPassword());
        user.setPassword(encryptedPassword);
        user.setActivated(true);
        Set<String> defaultAuthorities = new HashSet<>();
        defaultAuthorities.add(AuthoritiesConstants.USER);
        userVM.setAuthorities(defaultAuthorities);
        if (userVM.getAuthorities() != null) {
            Set<Role> authorities = userVM
                    .getAuthorities()
                    .stream()
                    .map(roleRepository::findById)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .collect(Collectors.toSet());
            user.setAuthorities(authorities);
        }
        user.setCreatedBy("system");
        user.setCreatedDate(Instant.now());
        SecurityUtils.getCurrentUserLogin().ifPresent(user::setCreatedBy);
        userRepository.save(user);
        this.clearUserCaches(user);
        log.debug("Created Information for User: {}", user);
        return user;
    }

    public Optional<AdminUserDTO> updateUser(ManagedUserVM userDTO) {
        return Optional
                .of(userRepository.findById(userDTO.getId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(user -> {
                    this.clearUserCaches(user);
                    user.setUsername(userDTO.getUsername().toLowerCase());
                    user.setFirstName(userDTO.getFirstName());
                    user.setLastName(userDTO.getLastName());
                    user.setActivated(userDTO.isActivated());
                    Set<Role> managedAuthorities = user.getAuthorities();
                    if (userDTO.getPassword() != null) {
                        user.setPassword(passwordEncoder.encode(KeyPairGeneratorUtil.decrypt(userDTO.getPassword())));
                    }
                    managedAuthorities.clear();
                    userDTO
                            .getAuthorities()
                            .stream()
                            .map(roleRepository::findById)
                            .filter(Optional::isPresent)
                            .map(Optional::get)
                            .forEach(managedAuthorities::add);
                    userRepository.save(user);
                    this.clearUserCaches(user);
                    log.debug("Changed Information for User: {}", user);
                    return user;
                })
                .map(AdminUserDTO::new);
    }

    @Transactional(readOnly = true)
    public Optional<User> getUserWithAuthoritiesByLogin(String username) {
        return userRepository.findOneWithAuthoritiesByUsername(username);
    }

    @Transactional(readOnly = true)
    public Page<AdminUserDTO> getAllManagedUsers(UserCriteria criteria, Pageable pageable) {
        BooleanBuilder predicate = createPredicate(criteria);
        return userRepository.findAll(predicate, pageable).map(AdminUserDTO::new);
    }

    protected BooleanBuilder createPredicate(UserCriteria criteria) {
        QUser user = QUser.user;
        BooleanBuilder builder = new BooleanBuilder();
        if (criteria != null) {
            if (criteria.getId() != null) {
                builder.and(user.id.containsIgnoreCase(criteria.getId().getContains()));
            }
            if (criteria.getUsername() != null) {
                builder.and(user.username.containsIgnoreCase(criteria.getUsername().getContains()));
            }
            if (criteria.getFirstName() != null) {
                builder.and(user.firstName.containsIgnoreCase(criteria.getFirstName().getContains()));
            }
            if (criteria.getLastName() != null) {
                builder.and(user.lastName.containsIgnoreCase(criteria.getLastName().getContains()));
            }
        }
        return builder;
    }

    private void clearUserCaches(User user) {
        Objects.requireNonNull(cacheManager.getCache(UserRepository.USERS_BY_USERNAME_CACHE)).evict(user.getUsername());
    }
}
