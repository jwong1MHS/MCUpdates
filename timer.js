// Update the count down every 1 second
var x = setInterval(function() {

    // Set the date we're counting down to
    var countDownDate = new Date("May 1, 2020 00:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();
	
    // Find the distance between now and the count down date
    var remaining = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(remaining / (1000 * 60 * 60 * 24)); //1000 ms, 60s, 60m, 24hr
    var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //Remove days, divided 1000ms, 60s, 60m
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)); //Remove hours, divided 1000ms, 60s
    var seconds = Math.floor((remaining % (1000 * 60)) / 1000); //Remove minutes, divided 1000ms
    
    // Output the result
    document.getElementById("myTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, print text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("myTimer").innerHTML = "Movie Up!";
	}
}, 1000);
