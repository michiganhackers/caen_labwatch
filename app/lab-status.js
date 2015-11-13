var http = require("http");

var refreshLabStatus = function() {
    
    return http.getJSON("http://labwatch.engin.umich.edu/labs/data/lab-statuses.json?_=0").then(function (r) {
	// Argument (r) is a JSON!
	
    }, function (e) {
	//Argument (e) is Error!
    });   
}


/*
  Upon successfully recieving the lab totals, 
  returns an array of rooms of the form: [{room, total, in_use}, {..}, ..]

  Example: [{room: "1620 beyster", total:44, in_use:10}, {room: "1695 beyster", total:39, in_use: 14}]
*/
var refreshLabTotals = function() {
    return http.getJSON("http://hostinfo-dev.engin.umich.edu/hostinfo/labtotals?_=0").then(function (r) {
	// Argument (r) is a JSON!

	var resultsArray = [];
	for (building in r) {
	    for (rooms in r[building]) {
		for (roomJSON in building[room]) {
		    resultsArray.push({
			room: roomJSON.name,
			total: roomJSON.total,
			in_use: roomJSON.in_use
		    });
		}
	    }
	}
	return resultsArray;
    }, function (e) {
	//Argument (e) is Error!
    });   
}

exports.refreshLabTotals = refreshLabTotals;
