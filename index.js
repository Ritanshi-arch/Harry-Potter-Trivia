var readlinesync= require("readline-sync");

console.log("Welcome to the Ultimate Harry Potter Quiz, Test your knowledge of the entire Wizarding world from the professors of Hogwarts to the seven Horcruxes.Can you name them all? You may only be a muggle, but if you're a die-hard Harry Potter fan, then you'll do as well as Hermione Granger on this quiz")

score = 0
console.log("_________")

var username = readlinesync.question("What's your name Muggle? ")
console.log("_________")
console.log("Welcome " + username + " Lets start without wasting anytime")
console.log("_________")

function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Great ! Hit the Target!!")
    score = score + 1;
  } else {
    console.log("Alaas ! You dumb muggle")
    console.log(answer);
  }
  console.log(score)
}

play("Who were Harry's parents ?", "James and Lily Potter")
play("Which of these Hogwarts professors teaches Transfiguration ?", "McGonagall")
play("Who kills Dumbledore at the end of The Half-Blood Prince ?", "Snape")
play("Who first shows Harry the diary of Tom Riddle ?", "Moaning Myrtle")
play("Who was Tom Marvolo Riddle ?", "Voldemort")


console.log("---------")
console.log("Your final score is " + score)
console.log("Thank you for taking the time to do this ")
