package com.isiran.portal.config.dbmigrations;

import com.isiran.portal.config.Constants;
import com.isiran.portal.domain.Role;
import com.isiran.portal.domain.User;
import com.isiran.portal.security.AuthoritiesConstants;
import io.mongock.api.annotations.ChangeUnit;
import io.mongock.api.annotations.Execution;
import io.mongock.api.annotations.RollbackExecution;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.time.Instant;

/**
 * Creates the initial database setup.
 */
@ChangeUnit(id = "users-initialization", order = "001")
public class InitialSetupMigration {

    private final MongoTemplate template;

    public InitialSetupMigration(MongoTemplate template) {
        this.template = template;
    }

    @Execution
    public void changeSet() {
        Role userAuthority = createUserAuthority();
        userAuthority = template.save(userAuthority);
        Role adminAuthority = createAdminAuthority();
        adminAuthority = template.save(adminAuthority);
        addUsers(userAuthority, adminAuthority);
    }

    @RollbackExecution
    public void rollback() {}

    private Role createAuthority(String authority) {
        Role adminAuthority = new Role();
        adminAuthority.setName(authority);
        return adminAuthority;
    }

    private Role createAdminAuthority() {
        Role adminAuthority = createAuthority(AuthoritiesConstants.ADMIN);
        return adminAuthority;
    }

    private Role createUserAuthority() {
        Role userAuthority = createAuthority(AuthoritiesConstants.USER);
        return userAuthority;
    }

    private void addUsers(Role userAuthority, Role adminAuthority) {
        User user = createUser(userAuthority);
        template.save(user);
        User admin = createAdmin(adminAuthority, userAuthority);
        template.save(admin);
    }

    private User createUser(Role userAuthority) {
        User userUser = new User();
        userUser.setId("user-2");
        userUser.setUsername("user");
        userUser.setPassword("$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K");
        userUser.setFirstName("User");
        userUser.setLastName("User");
        userUser.setActivated(true);
        userUser.setCreatedBy(Constants.SYSTEM);
        userUser.setCreatedDate(Instant.now());
        userUser.getAuthorities().add(userAuthority);
        return userUser;
    }

    private User createAdmin(Role adminAuthority, Role userAuthority) {
        User adminUser = new User();
        adminUser.setId("user-1");
        adminUser.setUsername("admin");
        adminUser.setPassword("$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC");
        adminUser.setFirstName("admin");
        adminUser.setLastName("Administrator");
        adminUser.setActivated(true);
        adminUser.setCreatedBy(Constants.SYSTEM);
        adminUser.setCreatedDate(Instant.now());
        adminUser.getAuthorities().add(adminAuthority);
        adminUser.getAuthorities().add(userAuthority);
        return adminUser;
    }
}
