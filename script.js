
var currDay = $("#currentDay")

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
// checks and compares time to set the give space to past class

      if (parseInt(barId) < xTime) {
        $(this).removeClass("future")
        $(this).removeClass("present")
        $(this).addClass("past")

        // console.log($(this))
      }
// checks and compares time to set the give space to present class
      else if (barId === xTime) {

        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");

      }
// Sets remaining entry spaces to future class if other conditions are false
      else {
        $(this).addClass("future")
        $(this).removeClass("present")
        $(this).removeClass("past")
      }
    }
    )
    // if(currTime)
    // timeBar.attr("class", "future
  }, 1000);
}

timeCompare();


// creates a button listener to hear clicks with the save button is press
// Button record values to the given space and also saves value to the local storage

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


  // function created to grab local storage values and set them corresponding space desginated by given ID
  $(function () {


    $("#hour-7 textarea").val(localStorage.getItem("hour-7"))
    $("#hour-8 textarea").val(localStorage.getItem("hour-8"))
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"))
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"))
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"))
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"))
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"))
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"))
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"))
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"))
    $("#hour-18 textarea").val(localStorage.getItem("hour-18"))
    $("#hour-19 textarea").val(localStorage.getItem("hour-19"))


  });
})




