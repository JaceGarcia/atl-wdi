// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
 //Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
 //See LICENSE for details.

var timerUI = {
 drawNumericDisplay: function(timerValue){
 document.getElementById('numeric-display').textContent = timerValue;
var = numericDisplay document.getElementById('numeric-display');
numericDisplay.textContent = timerValue
if (timerValue <= 10){
    numericDisplay.style.color = 'red';
    var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
    numericDisplay.style.fontSize = newSize + 'em';
}
  },
  drawProgressBars: function(timerValue){
  document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
    var timeLeft = 100 - timerValue;
    document.getElementsByClassName('progress-bar');
    for(var i = 0; i < bar.length; ++i) {
        bars[i].style.width = timeLeft + '%'
    }
  },
  drawLitFuses: function(timerValue){
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)* 98 + '%';
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt * 98 + '%';
    var timeLeft = 98 - timerValue;
    for(var i = 0; i < fuse.length; ++i){
    document.getElementsByClassName('burnt')[i].style.width =(1 - percentUnburnt)* 98 + '%';
    document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt * 98 + '%';
    }
  },
  drawCrawlers: function(timerValue){
      var timeElapsed = 100 - timerValue;
      if (timerValue%2 === 0) {
        document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
      }
      else {
        document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
      }
      document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
  }
   var timeElapsed = 100 - timerValue;
   var crawlers = document.getElementsByClassName('crawler');
   for (var i = 0; i < crawlers.length; i++) {
     if (timerValue%2 === 0) {
       crawlers[i].style.marginTop = '0px';
     }
     else {
       crawlers[i].style.marginTop = '10px';
     }
     crawlers[i].style.marginLeft = (timeElapsed*10) + 'px';
 }
