//initialize variables
var timesTableHeader = "";
var timesTable = "";

for(var a = 2; a <= 7; a++ ) {
    //form the header here: 
    timesTableHeader += "<th>" + a + " Times Table </th>";

    //form the contents here:
    timesTable += "<td>";
    //in this loop add content to the initialized variables
    for(var i = 1; i <= 1000; i++) {
        timesTable += a + " X " + i + " = " + a * i + "<br/>";
    }
    timesTable += "</td>";
}

//render the contents to the page
document.getElementById('timesTableHeader').innerHTML = timesTableHeader;
document.getElementById('timesTableContent').innerHTML = timesTable;
