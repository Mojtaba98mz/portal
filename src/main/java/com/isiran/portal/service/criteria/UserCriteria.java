package com.isiran.portal.service.criteria;

import com.isiran.portal.service.filter.LongFilter;
import com.isiran.portal.service.filter.StringFilter;
import lombok.Data;
import org.springdoc.core.annotations.ParameterObject;

import java.io.Serializable;

@ParameterObject
@Data
public class UserCriteria implements Serializable {

    private static final long serialVersionUID = 1L;

    private LongFilter id;
    private StringFilter username;
    private StringFilter firstName;
    private StringFilter lastName;
    private Boolean distinct;

    public UserCriteria() {
    }
}
