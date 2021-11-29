var p = Schedulator.Scheduling;

var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.currentView = p.CalendarView.ResourceView;

calendar.theme = "light";
calendar.contactNameFormat = "F L";


var resource;