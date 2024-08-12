// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "pig"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let guess = prompt("Enter a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word

if (word.includes(guess)){
  console.log("your letter is in the word")
}else{
  console.log("your letter is not in the word.")
}
// Prompt the user to guess the word 
let guessA = prompt("Guess the word")

// Increase attempts by 1
attempts = attempts +1

// Write an if/else statement that checks if the user guess is equal to your word and tells the user

if (guessA== word){
  console.log("You guessed to word correctly")
  
}else{
  console.log("Wrong word.")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter

while (guessA !== word){
  let NewGuess = prompt("Enter another letter.")
  if (word.includes(NewGuess)){
  console.log("your letter is in the word")
    guessA = prompt("Guess the word.")

    if (guessA == word){
      console.log("correct word.")
    }else{
      console.log("you are wrong.")
      attempts ++
    }
}
}
// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 
console.log("It took", attempts, "attempts")
