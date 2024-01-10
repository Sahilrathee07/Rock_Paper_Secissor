let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const msg = document.querySelector("#msg");
const reset = document.querySelector("#reset");

const genComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor((Math.random()*options.length));
    const compChoice = options[randomIndex];
    return compChoice;
};

const draw = () => {
    msg.innerText = "Game draw";
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    if(userChoice===compChoice)
        draw();
    else {
        let userWin = true;
        if(userChoice==="rock") {
            // paper,scissor
            userWin = (compChoice === "paper") ? false : true;
        }
        else if(userChoice==="paper") {
            // rock, scissor
            userWin = (compChoice==="rock") ? true : false;
        }
        else {
            //rock,paper
            userWin = (compChoice === "rock") ? false: true;
        }

        if(userWin) {
            userScore++;
            user.innerText = userScore;
            msg.innerText = "Congratualation!! You won";
        }
        else {
            computerScore++;
            computer.innerText = computerScore;
            msg.innerText = "You loss. Better luck next time!!";
        }
    }
};

choices.forEach((choi) => {
    choi.addEventListener("click",()=> {
        const userChoice = choi.getAttribute("id");
        playGame(userChoice);
    });
});

const newGame = () => {
    userScore=0;
    computerScore=0;
    user.innerText = 0;
    computer.innerText = 0;
    msg.innerText = "Play your move";
};

reset.addEventListener("click",newGame);

