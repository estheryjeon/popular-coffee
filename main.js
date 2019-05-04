$(document).ready(function() {
  var local_data = data;
  var box = document.getElementById("info-box");
  var close = document.getElementById("close");

  var today = new Date();
  var future = new Date();
  future.setTime(future.getTime() + 3600000);
  future.setMinutes(0);
  future.setSeconds(0);

  var timeout = (future.getTime() - today.getTime());
  setTimeout(function() { window.location.reload(true); }, timeout);

  // timezone update

  function calcTime() {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*(-4)));
    var s = nd.getSeconds();
    var m = nd.getMinutes();
    var h = nd.getHours();
    var currentTime = h + ":" + m + ":" + s;
    $('#time').empty().append(currentTime);
    return nd;
  }

  setInterval(calcTime, 1000);

  // opacity update

  function opacity() {
    var time = calcTime();
    var hour = time.getHours();
    var day = time.getDay();
    for (i=0; i<local_data.length; i++) {
      var newOpacity = '0.' + local_data[i].populartimes[day].data[hour];
      $("#" + local_data[i].tag).css('opacity', newOpacity);
    }
  }

  opacity();

  // pop up information

  $('.popular').click(function(e) {
    var id = $(e.target).prop('id');
    for (i=0; i<local_data.length; i++) {
      if (id == local_data[i].tag) {
        var newText = i + 1 + "\n / " + local_data[i].name + "\n / " + local_data[i].address;
        $('#info').empty().append(newText);
        box.style.display = "block";
        close.onclick = function() {
          $("#info").empty();
          box.style.display = "none";
        }
      }
    }
  });

  $(window).scroll(function() {
    $('#info-box').css('top', $(this).scrollTop() + "px");
  });

});
