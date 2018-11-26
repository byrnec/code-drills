// `this` jQuery Business

// The README.md has instructions for this exercise


// 3. Using jQuery, create three buttons in the `buttons` div
//   * One should append "Hello" to the content of the `output` div
//   * One should append "World" to the content of the `output` div
//   * One should clear the content of the `output` div
//   * Do not hard code the strings into the click listener logic
//   * Do not store the values of these buttons into variables

// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here

  // create the "Hello" button
var buttonHello = $("<button>");
buttonHello.text("Hello");
buttonHello.attr("data", "Hello");

//Create the world button

var buttonWorld = $("<button>");
buttonWorld.text("World");
buttonWorld.attr("data", "World");

  // create the "Reset" button
var buttonReset = $("<button>");
buttonReset.text("Reset");
buttonReset.attr("data", "Reset");

  // create the "User" button
var buttonUser = $("<button>");
buttonUser.text("User");
buttonUser.attr("id", "user-button");

  // instantiate the initial data attribute to be an empty string
  buttonUser.attr("data", "");
  


  // add the "Hello", "World", and "Reset" buttons to the "buttons-area"
$("#buttons-area").append(buttonReset, buttonWorld, buttonHello);

  // add the "User" button to the "user-button-area"

$("#user-button-area").append(buttonUser);
  
  // End of your code area
}


// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we define below.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  
// 4. Create a key press listener and a button in the `user-button-area` div
//   * Append the value of each key press to the button you put into `user-button-area`
//   * This should not change the text on the button.
//   * When the user clicks on `user-button-area` clear the `output` div and then set the content of the `output` div to every key the user has typed
//   * Then clear the values inside the button so that the user can type something again
//   * The user key presses should only be stored inside the button. Do not use a variable to store the previous presses.

  document.onkeyup = function(event) {
    // Your code goes here

    // pull the previous key presses out of the "User" button
var previousKeys = $("#user-button").attr("data");

    // concatenate the key to the end of the previous key presses
    previousKeys += event.key;

    // store the new key press history back into the "User" button
    $("#user-button").attr("data", previousKeys);

    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here


    // if the data of the button is "Hello" or "World", we append the data
    // to the output area
switch ($(this).attr("data")){
  case "Hello":
  case "World":
$("#output").append($(this).attr("data"));

break;
    // if the data of the button is "Reset", we clear the output area
case "Reset":
$("#output").text($(this).attr("data"));
break;

    // otherwise, it's the "User" button, so we set the output area's content
    // to be the data of the button and then clear the data stored within the
    // "User button"

default:
$("#output").text($(this).attr("data"));
$(this).attr("data", "")
  }

    // End of your code area
  })
})
