$(document).ready(function(){

  // hide all answers when the page loads
  $('#bio-han').hide();
  $('#bio-sang').hide();
  $('#bio-nathan').hide();
  $('#bio-angela').hide();
  $('#bio-katt').hide();
  $('#bio-tim').hide();

  // listen for click event on question 1
  //#2 or #3
  // call showAnswer when event happens
  $('#name-han').click(showBioHan);
  $('#name-sang').click(showBioSang);
  $('#name-nathan').click(showBioNathan);
  $('#name-angela').click(showBioAngela);
  $('#name-katt').click(showBioKatt);
  $('#name-tim').click(showBioTim);

  // defining a funtion to show answer 1,2,3

  function showBioHan() {
    // alert('user clicked on question 1') <---example
    $("#bio-han").slideToggle("slow");
  }

  function showBioSang(){
    $("#bio-sang").slideToggle("slow");
  }
  
  function showBioNathan(){
    $("#bio-nathan").slideToggle("slow");
  
  }

  function showBioAngela() {
    // alert('user clicked on question 1') <---example
    $("#bio-angela").slideToggle("slow");
  }

  function showBioKatt(){
    $("#bio-katt").slideToggle("slow");
  }
  
  function showBioTim(){
    $("#bio-tim").slideToggle("slow");
  
  }
  
});



  // $('#stopButton').click(illuminateRed);
  // $('#slowButton').click(illuminateYellow);
  // $('#goButton').click(illuminateGreen);

  // function illuminateRed() {
  //   $('#stopLight').toggleClass('red');
  // }

  // function illuminateYellow() {
  //   $('#slowLight').toggleClass('yellow');
  // }

  // function illuminateGreen() {
  //   $('#goLight').toggleClass('green');
  // }