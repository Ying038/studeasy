import Timer from "lib/easytimer.js";
const timer = new Timer();
//$(document).ready( ()=>{
	//var timer = new Timer();
	$('#chronoExample .startButton').click(function () {
		timer.start({precision: 'secondTenths'});
	});

	$('#chronoExample .pauseButton').click(function () {
		timer.pause();
	});

	$('#chronoExample .stopButton').click(function () {
		timer.stop();
	});

	$('#chronoExample .resetButton').click(function () {
		timer.reset();
	});

	/*timer.addEventListener('secondsUpdated', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString());
	});*/

	timer.addEventListener('started', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString());
	});

	timer.addEventListener('reset', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString());
	});




	timer.addEventListener('secondTenthsUpdated', function (e) {
		$('#chronoExample .values').html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']));
	});

//})