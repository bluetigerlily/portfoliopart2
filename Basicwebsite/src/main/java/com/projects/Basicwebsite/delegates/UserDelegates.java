package com.projects.Basicwebsite.delegates;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.projects.Basicwebsite.beans.Events;
import com.projects.Basicwebsite.beans.User;
import com.projects.Basicwebsite.services.EventsServices;
import com.projects.Basicwebsite.services.UserServices;


@RequestMapping(path = "api/v1/login?/user")
public class UserDelegates implements FrontControllerDelegates{

	
	private final UserServices userserv;
	private final EventsServices eventsserv;
	Events events = new Events();
	
	
	
	@Autowired
	public UserDelegates(UserServices userserv, EventsServices eventsserv) {
		this.userserv = userserv;
		this.eventsserv = eventsserv;
	}
	
	
	
	@GetMapping
	public List<User> getUsers() {
		return userserv.getUsers();
	}
	
    @PostMapping("/events/{eventsId}/Events")
    public User addEvent(@PathVariable int eventsid,
                            @Valid @RequestBody User user) {
        return ((User) eventsserv.getEventbyId(eventsid))
                .map(events -> {
                    user.setEvents(events);
                    return eventsserv.save(user);
                }).orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + eventsid));
    }



    
    
	public EventsServices getEventsserv() {
		return eventsserv;
	}
				
	}

	
	
