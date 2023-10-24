package com.isiran.portal.repository;

import java.util.Optional;

import com.isiran.portal.models.User;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  String USERS_BY_LOGIN_CACHE = "usersByLogin";

  @EntityGraph(attributePaths = "authorities")
  @Cacheable(cacheNames = USERS_BY_LOGIN_CACHE)
  Optional<User> findOneWithAuthoritiesByUsername(String username);
}
