var p = Schedulator.Scheduling;

// create a new instance of the calendar
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.currentView = p.CalendarView.ResourceView;

calendar.theme = "light";
calendar.contactNameFormat = "F L";


var resource;