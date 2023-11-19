package com.isiran.portal.repository;

import com.isiran.portal.domain.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {}
//  Optional<Role> findByName(String name);
//}
