let range;
let answer;

const message = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
//const numberDOM = document.querySelector('.number');

let score = 20;
let highscore = 0;

// guess button
let guessButton = document.querySelector(".submit");

function handleGuessClick(event) {

    event.preventDefault();
    let guess = document.querySelector(".number").value;
    //console.log(answer);

    if(answer === undefined)
        alert("Please choose a range");
    else if(guess === "")
        alert("Please enter a number");
    else if(parseInt(guess) === answer){
        
        message.textContent = "🎉 Great job! That's the correct number!";

        //numberDOM.textContent = answer;
        document.querySelector("body").style.backgroundColor = "rgb(50, 73, 73)";

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } 
    else if(guess !== answer){
        if(score > 1){
            message.textContent = guess > answer ? "📈 Too High!" : "📉 Too Low!";
            score--;
            scoreDOM.textContent = score;
        } 
        else{
            message.textContent = "😭 You Lost The Round...";
            scoreDOM.textContent = 0;
        }
  }

  
}
guessButton.addEventListener("click", handleGuessClick);

// range buttons
let range10Button = document.querySelector(".range10");
let range50Button = document.querySelector(".range50");
let range100Button = document.querySelector(".range100");

function handleRange10Click(event) {
  range10Button.classList.add("selected");
  range50Button.classList.remove("selected");
  range100Button.classList.remove("selected");
  range = 10;
  answer = Math.floor(Math.random() * range);
}

function handleRange50Click(event) {
  range10Button.classList.remove("selected");
  range50Button.classList.add("selected");
  range100Button.classList.remove("selected");
  range = 50;
  answer = Math.floor(Math.random() * range);
}

function handleRange100Click(event) {
  range10Button.classList.remove("selected");
  range50Button.classList.remove("selected");
  range100Button.classList.add("selected");
  range = 100;
  answer = Math.floor(Math.random() * range);
}

range10Button.addEventListener("click", handleRange10Click);
range50Button.addEventListener("click", handleRange50Click);
range100Button.addEventListener("click", handleRange100Click);
