package com.projects.Basicwebsite.dao;

import com.projects.Basicwebsite.hibernate.EventsHibernate;
import com.projects.Basicwebsite.hibernate.RoleHibernate;
import com.projects.Basicwebsite.hibernate.UserHibernate;

public class DAOFactory {

	public static EventsDAO getEventsDAO() {
	
		return new EventsHibernate();
	}

	public static RoleDAO getRoleDAO() {
		
		return new RoleHibernate();
	}

	public static UserDAO getUserDAO() {
		
		return new UserHibernate();
	}

}
	
