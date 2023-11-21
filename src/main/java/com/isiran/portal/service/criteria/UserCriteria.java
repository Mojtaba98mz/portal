package com.isiran.portal.service.criteria;

import com.isiran.portal.service.filter.StringFilter;
import lombok.Data;
import org.springdoc.core.annotations.ParameterObject;

import java.io.Serializable;

@ParameterObject
@Data
public class UserCriteria implements Serializable {

    private static final long serialVersionUID = 1L;

    private StringFilter id;
    private StringFilter username;
    private StringFilter firstName;
    private StringFilter lastName;

    public UserCriteria() {
    }
}
