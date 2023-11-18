package com.isiran.portal.web.rest.vm;


import com.isiran.portal.security.dto.AdminUserDTO;
import jakarta.validation.constraints.Size;

public class ManagedUserVM extends AdminUserDTO {

    private String password;

    public ManagedUserVM() {
        // Empty constructor needed for Jackson.
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ManagedUserVM{" + super.toString() + "} ";
    }
}
