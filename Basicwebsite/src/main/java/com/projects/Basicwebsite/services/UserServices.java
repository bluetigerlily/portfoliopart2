package com.projects.Basicwebsite.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.projects.Basicwebsite.beans.Events;
import com.projects.Basicwebsite.beans.User;

@Service
public interface UserServices {

	List<User> getUsers();


	void setEvents(Events events);



}
