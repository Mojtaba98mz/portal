package com.isiran.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortalApplication {

//	static Logger logger = LoggerFactory.getLogger(SpringBootSecurityJwtApplication.class);

	public static void main(String[] args) {
//		logger.error("error");
    SpringApplication.run(PortalApplication.class, args);
	}

}
