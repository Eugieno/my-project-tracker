
var timeDisplayEl = $('#time-display');

// Time display code
var liveTime = function () {
    var today = moment().format('Do MMMM YYYY [at] h:mm:ss a');
    timeDisplayEl.text(today);
}
setInterval(liveTime,1000)

