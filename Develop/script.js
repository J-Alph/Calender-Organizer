// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hour8 = $("#hour-8");
var hour9 = localStorage.getItem("hour-9")
var hour10 = localStorage.getItem("hour-10")
var hour11 = localStorage.getItem("hour-11");
var hour12 = localStorage.getItem("hour-12");
var hour13 = localStorage.getItem("hour-13");
var hour14 = localStorage.getItem("hour-14");
var hour15 = localStorage.getItem("hour-15");
var hour16 = localStorage.getItem("hour-16");
var hour17 = localStorage.getItem("hour-17");


var currDay = $("#currentDay")
var timeBar = $("id")



var note = localStorage.getItem("note")
var vargas = localStorage.getItem("vargas")


// Adds current time at the headers
function timer() {
  setInterval(function () {
    var currTime = dayjs().format("MMM DD, YYYY")
    currDay.text(currTime);

  }, 1000);
}

timer();



// creates a function for time later use to compare to the id of each block 
// condiitonal statements added to check current time to affect attributes

function timeCompare() {
  setInterval(function () {
    var xTime = dayjs().format("H")
    console.log(xTime)

    console.log($(this))

    $('.time-block').each(function () {

      var barId = $(this).attr("id").split("-")[1];
      // console.log(barId, xTime)


      // console.log(parseInt(barId))
      console.log(xTime, barId)
      if (parseInt(barId) < xTime) {
              $(this).removeClass("future")
              $(this).removeClass("present")
              $(this).addClass("past")

              // console.log($(this))
            }
           
      else if (barId === xTime) {

        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");

        // console.log($(this))
        //   timeBar.attr("class", "present")
        // if (barId < xTime)
        //   timeBar.attr("class", "past")
        //   if(barId> xTime)
        //   timeBar.attr("class", "future")
      } 
     
       else {
        $(this).addClass("future")
        $(this).removeClass("present")
        $(this).removeClass("past")
      }
    }
    )
    // if(currTime)
    // timeBar.attr("class", "future
  }, 2000);
}

timeCompare();









$(document).ready(function () {
  $(".saveBtn").click(function () {

    var parentValue = $(this).parent().attr("id")

    var siblingValue = $(this).siblings()[1].value

    console.log($(this).parent())

    console.log(parentValue)
    console.log(siblingValue)

    // localStorage.clear()
    localStorage.setItem(parentValue, siblingValue)
    localStorage.getItem(parentValue)



    console.log(window.localStorage)

    // timeBar.append(vargas);




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
