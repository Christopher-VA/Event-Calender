$(function () {
  var date = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  var calander = $('.container-lg');
  var currentDay = $('#currentDay');
  var calanderHour = $('.time-block');
  var hourCurrent = dayjs().hour();
  currentDay.text(date);
 
  calander.on('click', '.saveBtn', function() {
    var hour = $(this).parent().attr('id');
    var note = $(this).parent().children().eq(1).val();
    localStorage.setItem(hour, note);

  });

  for (let i = 0; i < calanderHour.length; i++) {
    var currentRow = $(calanderHour[i]);
    var currentRowId = currentRow.attr("id");
    var rowHour = currentRowId.split('hour-')[1];
    if (rowHour < hourCurrent){
      currentRow.addClass("past");
    }
    else if (rowHour > hourCurrent){
      currentRow.addClass("future");
    }
    else {
      currentRow.addClass("present")
    }
    var savedNote = localStorage.getItem(currentRowId);
    if (savedNote) {
      currentRow.children().eq(1).val(savedNote);
    }
  }
});
