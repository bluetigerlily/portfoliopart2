let firstDay = (new Date(year, month)).getDay();

// check how many days in a month 
daysInMonth(iMonth, iYear) 
{ 
    return 32 — new Date(iYear, iMonth, 32).getDate();
}