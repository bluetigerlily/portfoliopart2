package com.projects.Basicwebsite.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "events")
public class Events{
	


	@Id
	@Column(name = "eventsid", unique = true)
	private int id;
	
	@Column(name="certification")
	private String certification;
	
	@Column(name = "certificationprep")
	private String certificationprep;
	
	@Column(name = "other")
	private String other;
	
	@Column(name = "seminar")
	private String seminar;
	
	@Column(name = "technicaltraining")
	private String technicaltraining;
	
	@Column(name = "universitycourse")
	private String universitycourse;
	
	@Column(name = "eventcost")
	private int eventcost;
	
	@Column(name = "eventlocation")
	private String eventlocation;
	
	@Column(name = "currentdate")
	private int currentdate;
	
	@Column(name = "eventstartdate")
	private int eventstartdate;
	
	@Column(name = "eventenddate")
	private int eventenddate;
	
	@Column(name = "eventdescription")
	private String eventdescription;
	
	@Column(name = "gradingformatpresentation")
	private Boolean gradingformatpresentation;
	
	@Column(name = "gradingformatletterdefault")
	private Boolean gradingformatletterdefault;
	
	@Column(name = "gradingformatlettercustom")
	private Boolean gradingformatlettercustom;
	
	@Column(name = "requestjustification")
	private String requestjustification;
	
	@Column(name = "isurgent")
	private Boolean isurgent; // if there's only 2 weeks before event
	
	@Column(name = "rejectionjustification")
	private String rejectionjustification;
	
	@Column(name = "empsubmitted")
	private Boolean empsubmitted;// did the employee submit the form
	
	@Column(name = "dseapproved")
	private Boolean dseapproved;// did the direct supervisor of the employee approve
	
	@Column(name = "dhapproved")
	private Boolean dhapproved; // did the department head of the employee approve
	
	@Column(name = "bencoapproved")
	private Boolean bencoapproved; // did the benefits coordinator approve
	
	@Column(name = "finalsay")
	private Boolean finalsay; // did the benefits coordinators supervisor approve (if necessary)
	
	@Column(name = "changerequestamount")
	private Boolean changerequestamount; // is a requested amount change needing to be done
	
	@Column(name = "changedamounto")
	private int changedamountto; // What's the new amount

	
	
	
	
	
	
	public Events() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Events(int id, String certification, String certificationprep, String other, String seminar,
			String technicaltraining, String universitycourse, int eventcost, String eventlocation, int currentdate,
			int eventstartdate, int eventenddate, String eventdescription, Boolean gradingformatpresentation,
			Boolean gradingformatletterdefault, Boolean gradingformatlettercustom, String requestjustification,
			Boolean isurgent, String rejectionjustification, Boolean empsubmitted, Boolean dseapproved,
			Boolean dhapproved, Boolean bencoapproved, Boolean finalsay, Boolean changerequestamount,
			int changedamountto) {
		super();
		this.id = id;
		this.certification = certification;
		this.certificationprep = certificationprep;
		this.other = other;
		this.seminar = seminar;
		this.technicaltraining = technicaltraining;
		this.universitycourse = universitycourse;
		this.eventcost = eventcost;
		this.eventlocation = eventlocation;
		this.currentdate = currentdate;
		this.eventstartdate = eventstartdate;
		this.eventenddate = eventenddate;
		this.eventdescription = eventdescription;
		this.gradingformatpresentation = gradingformatpresentation;
		this.gradingformatletterdefault = gradingformatletterdefault;
		this.gradingformatlettercustom = gradingformatlettercustom;
		this.requestjustification = requestjustification;
		this.isurgent = isurgent;
		this.rejectionjustification = rejectionjustification;
		this.empsubmitted = empsubmitted;
		this.dseapproved = dseapproved;
		this.dhapproved = dhapproved;
		this.bencoapproved = bencoapproved;
		this.finalsay = finalsay;
		this.changerequestamount = changerequestamount;
		this.changedamountto = changedamountto;
	}

	@Override
	public String toString() {
		return "Events [id=" + id + ", certification=" + certification + ", certificationprep=" + certificationprep
				+ ", other=" + other + ", seminar=" + seminar + ", technicaltraining=" + technicaltraining
				+ ", universitycourse=" + universitycourse + ", eventcost=" + eventcost + ", eventlocation="
				+ eventlocation + ", currentdate=" + currentdate + ", eventstartdate=" + eventstartdate
				+ ", eventenddate=" + eventenddate + ", eventdescription=" + eventdescription
				+ ", gradingformatpresentation=" + gradingformatpresentation + ", gradingformatletterdefault="
				+ gradingformatletterdefault + ", gradingformatlettercustom=" + gradingformatlettercustom
				+ ", requestjustification=" + requestjustification + ", isurgent=" + isurgent
				+ ", rejectionjustification=" + rejectionjustification + ", empsubmitted=" + empsubmitted
				+ ", dseapproved=" + dseapproved + ", dhapproved=" + dhapproved + ", bencoapproved=" + bencoapproved
				+ ", finalsay=" + finalsay + ", changerequestamount=" + changerequestamount + ", changedamountto="
				+ changedamountto + ", getId()=" + getId() + ", getCertification()=" + getCertification()
				+ ", getCertificationprep()=" + getCertificationprep() + ", getOther()=" + getOther()
				+ ", getSeminar()=" + getSeminar() + ", getTechnicaltraining()=" + getTechnicaltraining()
				+ ", getUniversitycourse()=" + getUniversitycourse() + ", getEventcost()=" + getEventcost()
				+ ", getEventlocation()=" + getEventlocation() + ", getCurrentdate()=" + getCurrentdate()
				+ ", getEventstartdate()=" + getEventstartdate() + ", getEventenddate()=" + getEventenddate()
				+ ", getEventdescription()=" + getEventdescription() + ", getGradingformatpresentation()="
				+ getGradingformatpresentation() + ", getGradingformatletterdefault()="
				+ getGradingformatletterdefault() + ", getGradingformatlettercustom()=" + getGradingformatlettercustom()
				+ ", getRequestjustification()=" + getRequestjustification() + ", getIsurgent()=" + getIsurgent()
				+ ", getRejectionjustification()=" + getRejectionjustification() + ", getEmpsubmitted()="
				+ getEmpsubmitted() + ", getDseapproved()=" + getDseapproved() + ", getDhapproved()=" + getDhapproved()
				+ ", getBencoapproved()=" + getBencoapproved() + ", getFinalsay()=" + getFinalsay()
				+ ", getChangerequestamount()=" + getChangerequestamount() + ", getChangedamountto()="
				+ getChangedamountto() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCertification() {
		return certification;
	}

	public void setCertification(String certification) {
		this.certification = certification;
	}

	public String getCertificationprep() {
		return certificationprep;
	}

	public void setCertificationprep(String certificationprep) {
		this.certificationprep = certificationprep;
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other;
	}

	public String getSeminar() {
		return seminar;
	}

	public void setSeminar(String seminar) {
		this.seminar = seminar;
	}

	public String getTechnicaltraining() {
		return technicaltraining;
	}

	public void setTechnicaltraining(String technicaltraining) {
		this.technicaltraining = technicaltraining;
	}

	public String getUniversitycourse() {
		return universitycourse;
	}

	public void setUniversitycourse(String universitycourse) {
		this.universitycourse = universitycourse;
	}

	public int getEventcost() {
		return eventcost;
	}

	public void setEventcost(int eventcost) {
		this.eventcost = eventcost;
	}

	public String getEventlocation() {
		return eventlocation;
	}

	public void setEventlocation(String eventlocation) {
		this.eventlocation = eventlocation;
	}

	public int getCurrentdate() {
		return currentdate;
	}

	public void setCurrentdate(int currentdate) {
		this.currentdate = currentdate;
	}

	public int getEventstartdate() {
		return eventstartdate;
	}

	public void setEventstartdate(int eventstartdate) {
		this.eventstartdate = eventstartdate;
	}

	public int getEventenddate() {
		return eventenddate;
	}

	public void setEventenddate(int eventenddate) {
		this.eventenddate = eventenddate;
	}

	public String getEventdescription() {
		return eventdescription;
	}

	public void setEventdescription(String eventdescription) {
		this.eventdescription = eventdescription;
	}

	public Boolean getGradingformatpresentation() {
		return gradingformatpresentation;
	}

	public void setGradingformatpresentation(Boolean gradingformatpresentation) {
		this.gradingformatpresentation = gradingformatpresentation;
	}

	public Boolean getGradingformatletterdefault() {
		return gradingformatletterdefault;
	}

	public void setGradingformatletterdefault(Boolean gradingformatletterdefault) {
		this.gradingformatletterdefault = gradingformatletterdefault;
	}

	public Boolean getGradingformatlettercustom() {
		return gradingformatlettercustom;
	}

	public void setGradingformatlettercustom(Boolean gradingformatlettercustom) {
		this.gradingformatlettercustom = gradingformatlettercustom;
	}

	public String getRequestjustification() {
		return requestjustification;
	}

	public void setRequestjustification(String requestjustification) {
		this.requestjustification = requestjustification;
	}

	public Boolean getIsurgent() {
		return isurgent;
	}

	public void setIsurgent(Boolean isurgent) {
		this.isurgent = isurgent;
	}

	public String getRejectionjustification() {
		return rejectionjustification;
	}

	public void setRejectionjustification(String rejectionjustification) {
		this.rejectionjustification = rejectionjustification;
	}

	public Boolean getEmpsubmitted() {
		return empsubmitted;
	}

	public void setEmpsubmitted(Boolean empsubmitted) {
		this.empsubmitted = empsubmitted;
	}

	public Boolean getDseapproved() {
		return dseapproved;
	}

	public void setDseapproved(Boolean dseapproved) {
		this.dseapproved = dseapproved;
	}

	public Boolean getDhapproved() {
		return dhapproved;
	}

	public void setDhapproved(Boolean dhapproved) {
		this.dhapproved = dhapproved;
	}

	public Boolean getBencoapproved() {
		return bencoapproved;
	}

	public void setBencoapproved(Boolean bencoapproved) {
		this.bencoapproved = bencoapproved;
	}

	public Boolean getFinalsay() {
		return finalsay;
	}

	public void setFinalsay(Boolean finalsay) {
		this.finalsay = finalsay;
	}

	public Boolean getChangerequestamount() {
		return changerequestamount;
	}

	public void setChangerequestamount(Boolean changerequestamount) {
		this.changerequestamount = changerequestamount;
	}

	public int getChangedamountto() {
		return changedamountto;
	}

	public void setChangedamountto(int changedamountto) {
		this.changedamountto = changedamountto;
	}


	
	
	
	
}
