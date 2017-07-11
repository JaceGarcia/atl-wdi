// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    this.millisecs ++ 10;
    if (this.millisecs === 1000):
    this.millisecs -- 1000{
    this.secs ++;
    }
    if (this.secs === 60);
    this.secs -- 60{
    this.mins ++;
    }
  },
  reset: function(){
    // Your Code Here
    this.millisecs = 0;
    this.secs = 0;
    this.mins = 0;
  },
  start: function(){
    // Your Code Here
    if(this.isRunning)
    this.isRunning = true
    this.tickClock()
  },
  stop: function(){
    // Your Code Here
    this.isRunning = false;
  },
  lap: function(){
    // Your Code Here
    if (this.isRunning){
        this.laps.push({
        mins: this.mins;
        secs: this.secs;
        millisecs: this.millisecs;
        })
    }

  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    $('#mins').html = .zeroFill(mins, 2);
    $('#secs').html = .zeroFill(secs, 2);
    $('#millisecs').html = .zeroFill(millisecs/10, 2);
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    var laps = stopwatch.laps;
    var lapList = $('lapList');
    for (var i = 0; i < laps.length; i++){
        lapList.html +=
        <li>
            .zeroFill(laps.[i].mins, 2) + ":" +
            .zeroFill(laps.[i].secs, 2) + ":" +
            .zeroFill(laps.[i].millisecs/10, 2) + ":"
        </li>
    }
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
    return str;
  },
};
  },
};

/// Top-Level Application Code ///
const AppController = {
    handleClockTick: function(){
      ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    },
    handleClickStart: function() {
      if (!Stopwatch.isRunning) { Stopwatch.start(); }
    },
    handleClickLap: function(){
      if (Stopwatch.isRunning) {
        Stopwatch.lap();
        ViewEngine.updateLapListDisplay(Stopwatch.laps);
      }
    },
    handleClickStopReset: function(){
      if (Stopwatch.isRunning) {
        Stopwatch.stop();
      } else {
        Stopwatch.reset();
        ViewEngine.updateTimeDisplay(0, 0, 0);
        ViewEngine.updateLapListDisplay(Stopwatch.laps);
      }
    }
   };

   window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
};
