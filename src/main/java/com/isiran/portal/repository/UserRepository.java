package com.isiran.portal.repository;

import com.isiran.portal.domain.User;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String>, QuerydslPredicateExecutor<User> {

  String USERS_BY_USERNAME_CACHE = "usersByUsername";

  @Cacheable(cacheNames = USERS_BY_USERNAME_CACHE)
  Optional<User> findOneWithAuthoritiesByUsername(String username);

  @Cacheable(cacheNames = USERS_BY_USERNAME_CACHE)
  Optional<User> findOneByUsername(String username);
}
