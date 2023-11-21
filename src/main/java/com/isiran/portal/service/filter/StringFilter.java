
package com.isiran.portal.service.filter;

import lombok.Data;

@Data
public class StringFilter {

    private static final long serialVersionUID = 1L;

    private String contains;

    /**
     * <p>Constructor for StringFilter.</p>
     */
    public StringFilter() {
    }

    /**
     * <p>Constructor for StringFilter.</p>
     *
     * @param filter a {@link StringFilter} object.
     */
    public StringFilter(StringFilter filter) {
        contains = filter.contains;
    }
}
