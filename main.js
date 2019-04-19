$(document).ready(function() {
  var local_data = data;

  var today = new Date();
  var weekday = today.getDay();
  var hour = today.getHours();

  for (i=0; i<local_data.length; i++) {
    var newOpacity = '0.' + local_data[i].hours[weekday][hour];
    $("#" + local_data[i].name).css('opacity', newOpacity);
  }

});
