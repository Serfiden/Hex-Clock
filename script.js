
$(document).ready(function(){
	setInterval(function()
	{
		var d = new Date();
		var hour = d.getHours();
		var mins = d.getMinutes();
		if(mins <= 9) {
			mins = '0' + mins;
		}
		var secs = d.getSeconds();
		if(secs <= 9)
		{
			secs = '0' + secs;
		}
		var datestring = "#" + hour + mins + secs;
		$('#par').html(datestring);
		$('body').css("background-color", datestring);
	}, 1000)
})