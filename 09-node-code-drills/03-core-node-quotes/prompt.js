// // ======== You are given NOTHING to start with 😱 ========

// ## Hints
// - You will need to use fs

var fs = require('fs');

// Create a CLI (Command Line Interface) application that reads the name a user puts in
// and returns a quote that person said.

// The only names the user will be able to get quotes for are the ones included in quotes.txt.

// Next, we store the text given to us from the command line.

var args = [];
var fullQuotes;
var person;
var message = "That person never said anything"

//Handle names that are longer than one word
for (var i = 2; i < process.argv.length; i++) {
    args.push(process.argv[i]);
}

//Turn the name into a single string
person = args.join(" ");

// separates the quotes
fullQuotes = data.split(';');

// Next, we read the text in the "random.txt" file.
// If the file didn't exist, then it gets created on the fly.
fs.readFile("quotes.txt", "utf8", function (error, data) {

    for (var i = 0; i < fullQuotes.length; i++) {

        // separates the people from the quotes
        var quote = fullQuotes[i].split("-");

        if (quote[i].toLocaleLowerCase() === person) {

            //change the default message to the quote in question
            message = quote[0];
      
          }
        }
      
        console.log(message)
      });
      
      