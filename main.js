$(document).ready(function() {
  var local_data = data;
  var info = document.getElementById("info");
  var btn = document.getElementById("square-one-1");
  btn.onclick = function() {
    info.innerHTML = "<p>" + "1 " + local_data[0].name + "</p>" + "<p>" + local_data[0].address +
    "</p>X";
    info.style.display = "block";
  }

  var today = new Date();
  var day = today.getDay();
  var hour = today.getHours();

  for (i=0; i<local_data.length; i++) {
    var newOpacity = '0.' + local_data[i].populartimes[day-1].data[hour];
    console.log(newOpacity);
    $("#" + local_data[i].tag).css('opacity', newOpacity);
  }

});
