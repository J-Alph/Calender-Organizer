// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hour8 = $("#hour-8");
var currDay = $("#currentDay")
var timeBar = $("#hour-8")

var note = localStorage.getItem("note")


console.log(hour8)


function timer(){
   setInterval(function() {
      var currTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a")
      currDay.text(currTime);


  }, 1000);
}

timer();



function greenEggs(){
  timeBar.attr("class", 'present');
  console.log("happy")
}


$(document).ready(function(){
$(".saveBtn").click(function(){
 
var happyday = $(this).parent().attr("id")
var siblingValue = $(this).siblings()[1].value

console.log(happyday + "2")
console.log(siblingValue)

localStorage.setItem(happyday, siblingValue)
localStorage.getItem(happyday, siblingValue)

 greenEggs();
})

})




// $(function () )

//   $("currentDay").datepicker()


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
