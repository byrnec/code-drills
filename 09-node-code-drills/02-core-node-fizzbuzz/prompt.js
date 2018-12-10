
function fizzBuzz(n) {
    // ===================== YOUR WORK HERE =====================

    // Given a number, create a function that console.logs every number up until that number. 
    allNumbersArr = [];

    for (let i = n; i > 0; i--) {
        allNumbersArr.push();
    }
    allNumbersArr.reverse();

    for (let i = 0; allNumbersArr.length; i++) {
        // If a number is a multiple of three, console.log("fizz"). 
        if (allNumbersArr[i] % 3 === 0) {
            console.log("fizz");
        }
        // If it is a multiple of five, console.log("buzz"). 
        else if (allNumbersArr[i] % 5 === 0) {
            console.log("buzz");
        }
        // If it is a number of both, console.log("fizzbuzz").

        else if (allNumbersArr[i] % 3 === 0 && input % 5 === 0) {
            console.log("fizzbuzz");

        } else {
            console.log(allNumbersArr[i])
            // Run your script through the command line using process.argv to pass whatever number you choose.

            // ==========================================================
        }
    }
}

fizzBuzz(/*Pass an argument from the command line*/)

console.log(process.argv);