$(document).ready(function() {
  var local_data = data;
  var box = document.getElementById("info-box");
  var close = document.getElementById("close");

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

  var today = new Date();
  var day = today.getDay();
  var hour = today.getHours();

  for (i=0; i<local_data.length; i++) {
    var newOpacity = '0.' + local_data[i].populartimes[day].data[hour];
    $("#" + local_data[i].tag).css('opacity', newOpacity);
  }

});
