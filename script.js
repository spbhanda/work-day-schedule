$(document).ready(function () {
   let currentHour = moment().format("HH");
   console.log(currentHour);
   // display today's date using moment.js
   $("#currentDay").text(moment().format("dddd,MMMM Do, YYYY"));
   // Color code the time blocks for past, present and future
   $(".description").each(function () {
      let timeDiv = parseInt($(this).attr("id"));
      if (currentHour == timeDiv) {
         $(this).addClass("present");
         $(this).removeClass("past");
         $(this).removeClass("future");
      } else if (currentHour > timeDiv) {
         $(this).addClass("past");
         $(this).removeClass("present");
         $(this).removeClass("future");
      } else if (currentHour < timeDiv) {
         $(this).addClass("future");
         $(this).removeClass("present");
         $(this).removeClass("past");
      } else {
         console.log("an error occur!");
      }
   });
   // retrieve task data from locatstorage
   $(".description").each(function () {
      for (let i = 0; i < localStorage.length; i++) {
         let task = localStorage.key(i);
         let taskValue = localStorage.getItem(task);
         let taskTime = $(this).siblings(".hour").text();
         if (task === taskTime) {
            $(this).val(taskValue);
         }
      }
   });
   // save task when button is clicked
   $(".saveBtn").click(function (event) {
      event.preventDafault;
      let taskTime = $(this).siblings(".hour").text();
      let task = $(this).siblings(".description").val();
      if (task === "") {
         localStorage.setItem(taskTime, "");
      } else {
         localStorage.setItem(taskTime, task);
      }
   });
});
