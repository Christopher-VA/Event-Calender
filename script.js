// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var date = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  var calander = $('.container');
  var currentDay = $('#currentDay');
  var saveBtn = $('.saveBtn');
  var calanderHour = $('.time-block');
  var hourCurrent = dayjs().hour();
  var eventText = localStorage.getItem("event");
  currentDay.text(date);


  for (let i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', function() {
      var input = $(".description");
      console.log(i);
      localStorage.setItem("event", eventText);
    })
}  

  for (let i = 0; i < calanderHour.length; i++) {
    var currentRow = $(calanderHour[i]);
    var rowHour = currentRow.attr("id").split('hour-')[1];
    if (rowHour < hourCurrent){
      currentRow.addClass("past");
    }
    else if (rowHour > hourCurrent){
      currentRow.addClass("future");
    }
    else {
      currentRow.addClass("present")
    }
  }
});
