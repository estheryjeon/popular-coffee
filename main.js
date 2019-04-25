$(document).ready(function() {
  var local_data = data;
  var box = document.getElementById("info-box");
  var close = document.getElementById("close");

  var today = new Date();
  var day = today.getDay();
  var hour = today.getHours();

  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var currentTime = h + ":" + m + ":" + s;
    $('#time').empty().append(currentTime);
  };

  setInterval(time, 1000);

  for (i=0; i<local_data.length; i++) {
    var newOpacity = '0.' + local_data[i].populartimes[day].data[hour];
    $("#" + local_data[i].tag).css('opacity', newOpacity);
  }

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
