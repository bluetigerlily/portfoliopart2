package com.projects.Basicwebsite.services;

import java.util.List;

import javax.validation.Valid;

import com.projects.Basicwebsite.beans.User;

public class UserServicesImpl implements UserServices{

	@Override
	public List<User> getUsers() {
	return List.of(
		new User(
				1,
				"haleym",
				"4271",
				"Haley",
				"Moses",
				"vhr825@gmail.com",
				1000,
				0,
				"benco",
				null));
}

	


	



	@Override
	public Object AddUser(@Valid User user) {
		// TODO Auto-generated method stub
		return null;
	}


}
