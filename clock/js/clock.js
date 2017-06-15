var zero = function(number, position) {
	number = number + '';
	return number.length >= position ? number : new Array(position - number.length + 1).join('0') + number;
}

var printToDay = function() {
	var clock = document.querySelector('.clock'),
			calender = document.querySelector('.calender'),
			now = new Date(),
			year = now.getFullYear(),
			month = zero(now.getMonth() + 1, 2),
			date = zero(now.getDate(), 2),
			day = now.getDay(),
			hours = zero(now.getHours(), 2),
			mins = zero(now.getMinutes(), 2),
			seconds = zero(now.getSeconds(), 2),
			amPm = 'AM',
			week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			yoil = week[day],
			ymdd = year + '-' + month + '-' + date + " ( " + yoil + " )";
	
	if(hours >= 12) {
		amPm = "PM";
	}

	if(seconds >= 50) {
		seconds = '<span style="color: #B91A4D;">' + seconds + '</span>';
	}

	calender.innerHTML = ymdd;
	
	clock.innerHTML = hours + ":" + mins + ":" + seconds + " " + '<span style="font-size: 30px;">' + amPm + '</span>';

	setTimeout('printToDay()', 1000);
}

window.onload = function() {
	printToDay();
}

