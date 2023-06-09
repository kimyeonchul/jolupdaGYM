var time = 0;
var starFlag = true;
var state = true;
$(document).ready(function () {
  buttonEvt();
});

function init() {
  document.querySelector(".stopWatch").innerHTML = "00:00:00";
}

function buttonEvt() {
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;

  // start btn
  $("#goStopBtn").click(function () {
    if (state) {
      $("#goStopBtn").css("backgroundColor", "red");
      $("#goStopBtn").text("STOP");
      state = false;

      if (time == 0) {
        init();
      }

      timer = setInterval(function () {
        time++;

        min = Math.floor(time / 60);
        hour = Math.floor(min / 60);
        sec = time % 60;
        min = min % 60;

        var th = hour;
        var tm = min;
        var ts = sec;
        if (th < 10) {
          th = "0" + hour;
        }
        if (tm < 10) {
          tm = "0" + min;
        }
        if (ts < 10) {
          ts = "0" + sec;
        }

        document.querySelector(".stopWatch").innerHTML =
          th + ":" + tm + ":" + ts;
      }, 1000);
    } else {
      $("#goStopBtn").css("backgroundColor", "blue");
      $("#goStopBtn").text("START");
      clearInterval(timer);
      state = true;
    }
  });

  // stop btn
  $("#stopBtn").click(function () {
    if (time != 0) {
      $(".fa").css("color", "#FAED7D");
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;
      time = 0;
      init();
    }
  });

  $(".saveBtn").click(function () {
    window.location.href = "https://www.naver.com/";
  });

  $("#mypageBtn").click(function () {
    window.location.href = "mypage.html";
  });
}
