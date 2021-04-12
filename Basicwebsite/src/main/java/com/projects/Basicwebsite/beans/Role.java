package com.projects.Basicwebsite.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="role")
public class Role{
	
	@Id
	@Column(name = "roleid", unique = true)
	private int id;
	
	
	
	@Column(name = "employee")
	private String employee;
	
	@Column(name = "directsuperemp")
	private String directsuperemp;
	
	@Column(name = "directsuperbenco")
	private String directsuperbenco;
	
	@Column(name = "departmenthead")
	private String departmenthead;
	
	@Column(name = "benco")
	private String benco;

	
	
	

	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int id, String employee, String directsuperemp, String directsuperbenco, String departmenthead,
			String benco) {
		super();
		this.id = id;
		this.employee = employee;
		this.directsuperemp = directsuperemp;
		this.directsuperbenco = directsuperbenco;
		this.departmenthead = departmenthead;
		this.benco = benco;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", employee=" + employee + ", directsuperemp=" + directsuperemp
				+ ", directsuperbenco=" + directsuperbenco + ", departmenthead=" + departmenthead + ", benco=" + benco
				+ ", getId()=" + getId() + ", getEmployee()=" + getEmployee() + ", getDirectsuperemp()="
				+ getDirectsuperemp() + ", getDirectsuperbenco()=" + getDirectsuperbenco() + ", getDepartmenthead()="
				+ getDepartmenthead() + ", getBenco()=" + getBenco() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Role)) {
			return false;
		}
		Role other = (Role) obj;
		if (benco == null) {
			if (other.benco != null) {
				return false;
			}
		} else if (!benco.equals(other.benco)) {
			return false;
		}
		if (departmenthead == null) {
			if (other.departmenthead != null) {
				return false;
			}
		} else if (!departmenthead.equals(other.departmenthead)) {
			return false;
		}
		if (directsuperbenco == null) {
			if (other.directsuperbenco != null) {
				return false;
			}
		} else if (!directsuperbenco.equals(other.directsuperbenco)) {
			return false;
		}
		if (directsuperemp == null) {
			if (other.directsuperemp != null) {
				return false;
			}
		} else if (!directsuperemp.equals(other.directsuperemp)) {
			return false;
		}
		if (employee == null) {
			if (other.employee != null) {
				return false;
			}
		} else if (!employee.equals(other.employee)) {
			return false;
		}
		if (id != other.id) {
			return false;
		}
		return true;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmployee() {
		return employee;
	}

	public void setEmployee(String employee) {
		this.employee = employee;
	}

	public String getDirectsuperemp() {
		return directsuperemp;
	}

	public void setDirectsuperemp(String directsuperemp) {
		this.directsuperemp = directsuperemp;
	}

	public String getDirectsuperbenco() {
		return directsuperbenco;
	}

	public void setDirectsuperbenco(String directsuperbenco) {
		this.directsuperbenco = directsuperbenco;
	}

	public String getDepartmenthead() {
		return departmenthead;
	}

	public void setDepartmenthead(String departmenthead) {
		this.departmenthead = departmenthead;
	}

	public String getBenco() {
		return benco;
	}

	public void setBenco(String benco) {
		this.benco = benco;
	}
	
	
	
}
