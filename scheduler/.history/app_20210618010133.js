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

// render the calendar control
calendar.render();

calendar.resourceViewSettings.visibleCells = 30;
calendar.resourceViewSettings.timelines = 3;

calendar.resourceViewSettings.bottomTimelineSettings.unit = p.TimeUnit.Day;
calendar.resourceViewSettings.bottomTimelineSettings.unitCount = 1;

calendar.resourceViewSettings.middleTimelineSettings.unit = p.TimeUnit.Day;
calendar.resourceViewSettings.middleTimelineSettings.unitCount = 5;
calendar.resourceViewSettings.middleTimelineSettings.format = "ddd/dd";

calendar.resourceViewSettings.topTimelineSettings.unit = p.TimeUnit.Week;
calendar.resourceViewSettings.topTimelineSettings.unitCount = 2;
calendar.resourceViewSettings.topTimelineSettings.format = "MMMM";