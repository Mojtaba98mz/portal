package com.isiran.portal.repository;

import java.util.Optional;

import com.isiran.portal.models.ERole;
import com.isiran.portal.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
