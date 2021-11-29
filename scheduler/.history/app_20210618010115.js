var p = Schedulator.Scheduling;

// create a new instance of the calendar
var calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to List
calendar.currentView = p.CalendarView.ResourceView;

calendar.theme = "light";
calendar.contactNameFormat = "F L";


var resource;

// Add some tasks to the schedule.tasks collection.

resource = new p.Task();
resource.subject = "Some Task Name";
calendar.schedule.tasks.add(resource);

//divider
resource = new p.Task();
resource.subject = "";
calendar.schedule.tasks.add(resource);

//divider
resource = new p.Task();
resource.subject = "";
calendar.schedule.tasks.add(resource);

resource = new p.Contact();
resource.firstName = "Jeffrey";
resource.lastName = "Goldstone";
calendar.schedule.contacts.add(resource);

// group the calendar
calendar.tasks.addRange(calendar.schedule.tasks.items());
calendar.groupType = p.GroupType.GroupByTasks;