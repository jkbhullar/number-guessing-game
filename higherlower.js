let valid_input = false;
let num_maxvalue, input;

while(!valid_input) {
    input = window.prompt("Please enter a maximum value."); //prompts users to input maxvalue

    num_maxvalue = Number(input); 

    if(num_maxvalue != NaN && num_maxvalue > 0) {  //creates range 1-N for maxvalue; validates inputs
        valid_input = true;
    }   
}

var value = input;
 alert(Math.round(input));          //rounds all inputted values to whole integer
    console.log(Math.round(input));  //logs the whole integer as N

var num = Math.floor(Math.random() * num_maxvalue) + 1; //picks random number betwwen 1-N
    console.log(num)                //logs random number; this is what user must guess
//maxvalue (N) and random number are logged to make check runs easier.

const guesses = [];  //declare array to keep track of guesses

function do_guess() {  //creates guess function 
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");     
      
    if (guess == num) {
        guesses.push(guess); //push function to push each valid guess into array 
        message.innerHTML = "You got it! It took you " + guesses.length + " tries and your guesses were " + guesses + ".";
    }
    else if (guesses.includes(guess)) {  //checks if guessed value is already in guess array
        guesses.splice(guess);  //removes previously guessed number from array
        message.innerHTML = "You have already guessed this number.";
    }
    else if (guess > Math.round(input)) { //makes sure guess is not greater than N, stays in range 1-N
        message.innerHTML = "That number is not in range, try again!";
    } 
    else if (guess <= 0) {  //makes sure guess is not negative or 0, stays in range 1-N
        message.innerHTML = "That number is not in range, try again!";
    } 
    else if (guess < 1) { //makes sure values is not less than 1, stays in range 1-N
        message.innerHTML = "That number is not in range, try again!";
    } 
    else if (guess < num) { 
        guesses.push(guess);  //push function to push each valid guess into array         
        message.innerHTML = "Try a higher number.";
    } 
    else if (guess > num) {
        guesses.push(guess);  //push function to push each valid guess into array
        message.innerHTML = "Try a lower number.";
    }
    else if (guess !== Number) {  //makes sure guess is a number
        message.innerHTML = "That is not a number!"
    }
}