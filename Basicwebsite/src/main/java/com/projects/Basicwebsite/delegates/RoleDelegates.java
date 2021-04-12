package com.projects.Basicwebsite.delegates;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.projects.Basicwebsite.beans.User;
import com.projects.Basicwebsite.services.RoleServices;


@RequestMapping(path = "api/v1/login?/user/role")
public class RoleDelegates implements FrontControllerDelegates{

	private final RoleServices roleserv;
	
	
	@Autowired
	public RoleDelegates(RoleServices roleserv) {
		this.roleserv = roleserv;
	
}
	
	@GetMapping
	public User getRole() {
		return roleserv.getRole();
	}
	
	
	
	
}
