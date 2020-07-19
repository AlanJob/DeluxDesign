var da, y, mes, d, h, mins, sec;
da = new Date();
y = da.getFullYear;
mes = da.getMonth;
d = da.getDay;
h = da.getHours + 1;
mins = da.getMinutes;
sec = da.getSeconds;
simplyCountdown('#reloj', {
	year: 2020, // required
	month: 7, // required
	day: 18, // required
	hours: 10, // Default is 0 [0-23] integer
	minutes: 41, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: 'D',
		hours: 'H',
		minutes: 'M',
		seconds: 'S',
		pluralLetter: 's'
	},
	plural: false, //use plurals
	inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	// in case of inline set to false
	enableUtc: true, //Use UTC as default
	onEnd: function() {
		document.getElementById('bannerPromo').classList.add('oculta');
		return; 
	}, //Callback on countdown end, put your own function here
	refresh: 1000, // default refresh every 1s
	sectionClass: 'simply-section', //section css class
	amountClass: 'simply-amount', // amount css class
	wordClass: 'simply-word', // word css class
	zeroPad: false,
	countUp: false
});