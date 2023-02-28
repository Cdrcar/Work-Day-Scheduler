
/// Wait for the document to finish loading before running any code that interacts with the DOM
$(document).ready(function () {

//Current date in the header of the page
var currentDate =  moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDate);

//listener for click events on the save button
$(".saveBtn").on("click", function(){
  var time = $(this).parent().attr("id");
  var text = $(this).siblings("description").val();

//Save user input to local storage
localStorage.setItem(time,text);
})

//Code to apply the past, present, or future class to each time block by comparing the id to the current hour
var currentHour = moment().hour();

$(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

//Code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.

$(".time-block").each(function() {
  var time = $(this).attr("id");
  var text= localStorage.getItem(time);
  
  if (text!== null) {
    $(this).children(".description").val(text);
  }
});
})


