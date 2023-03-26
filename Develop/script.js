// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var currDay = $("#currentDay")
var timeBar = $("#id")

var work = $("#hour-8")



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
    // console.log(xTime)

    // console.log($(this))

    $('.time-block').each(function () {

      var barId = $(this).attr("id").split("-")[1];
      // console.log(barId, xTime)


      // console.log(parseInt(barId))

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

    localStorage.setItem(parentValue, siblingValue)

    // $(this).siblings()[1].value =localStorage.getItem(hour10)

  })


  $(function () {

    $("#hour-8 textarea").val(localStorage.getItem("hour-8"))
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"))
  }

  );

})


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
