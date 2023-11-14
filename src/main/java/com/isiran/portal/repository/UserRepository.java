package com.isiran.portal.repository;

import java.util.Optional;

import com.isiran.portal.domain.User;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> , JpaSpecificationExecutor<User> {

  String USERS_BY_USERNAME_CACHE = "usersByUsername";

  @EntityGraph(attributePaths = "authorities")
  @Cacheable(cacheNames = USERS_BY_USERNAME_CACHE)
  Optional<User> findOneWithAuthoritiesByUsername(String username);

  Optional<User> findOneByUsername(String username);
}
