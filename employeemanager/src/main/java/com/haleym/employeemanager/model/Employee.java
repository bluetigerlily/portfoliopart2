package com.haleym.employeemanager.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@SuppressWarnings("serial")
@Entity
public class Employee implements Serializable{

	 
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false)
	private Long id;
	private String name;
	private String email;
	private String jobTitle;
	private String phone;
	private String imageUrl;
	@Column(nullable = false, updatable = false)
	private String employeeCode;
	
	
	
	
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((employeeCode == null) ? 0 : employeeCode.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((imageUrl == null) ? 0 : imageUrl.hashCode());
		result = prime * result + ((jobTitle == null) ? 0 : jobTitle.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((phone == null) ? 0 : phone.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Employee)) {
			return false;
		}
		Employee other = (Employee) obj;
		if (email == null) {
			if (other.email != null) {
				return false;
			}
		} else if (!email.equals(other.email)) {
			return false;
		}
		if (employeeCode == null) {
			if (other.employeeCode != null) {
				return false;
			}
		} else if (!employeeCode.equals(other.employeeCode)) {
			return false;
		}
		if (id == null) {
			if (other.id != null) {
				return false;
			}
		} else if (!id.equals(other.id)) {
			return false;
		}
		if (imageUrl == null) {
			if (other.imageUrl != null) {
				return false;
			}
		} else if (!imageUrl.equals(other.imageUrl)) {
			return false;
		}
		if (jobTitle == null) {
			if (other.jobTitle != null) {
				return false;
			}
		} else if (!jobTitle.equals(other.jobTitle)) {
			return false;
		}
		if (name == null) {
			if (other.name != null) {
				return false;
			}
		} else if (!name.equals(other.name)) {
			return false;
		}
		if (phone == null) {
			if (other.phone != null) {
				return false;
			}
		} else if (!phone.equals(other.phone)) {
			return false;
		}
		return true;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(Long id, String name, String email, String jobTitle, String phone, String imageUrl,
			String employeeCode) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.jobTitle = jobTitle;
		this.phone = phone;
		this.imageUrl = imageUrl;
		this.employeeCode = employeeCode;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", email=" + email + ", jobTitle=" + jobTitle + ", phone="
				+ phone + ", imageUrl=" + imageUrl + ", employeeCode=" + employeeCode + ", getId()=" + getId()
				+ ", getName()=" + getName() + ", getEmail()=" + getEmail() + ", getJobTitle()=" + getJobTitle()
				+ ", getPhone()=" + getPhone() + ", getImageUrl()=" + getImageUrl() + ", getEmployeeCode()="
				+ getEmployeeCode() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getEmployeeCode() {
		return employeeCode;
	}
	public void setEmployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}
	
	
	
	
}
