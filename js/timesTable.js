
function drawTimesTable(minTimes, maxTimes, iterCount, headerId, contentId) {
    if(headerId == null) {
        headerId ="timesTableHeader";
    }
    if(contentId == null) {
        contentId ="timesTableContent";
    }
    //initialize variables
    var timesTableHeader = "";
    var timesTable = "";

    for(var a = minTimes; a <= maxTimes; a++ ) {
        //form the header here: 
        timesTableHeader += "<th>" + a + " Times Table </th>";

        //form the contents here:
        timesTable += "<td>";
        //in this loop add content to the initialized variables
        for(var i = 1; i <= iterCount; i++) {
            timesTable += a + " X " + i + " = " + a * i + "<br/>";
        }
        timesTable += "</td>";
    }

    //render the contents to the page
    document.getElementById(headerId).innerHTML = timesTableHeader;
    document.getElementById(contentId).innerHTML = timesTable;

}