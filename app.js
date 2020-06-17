const game = ()=> {
    let  pScore = 0; //two variables that are needed for global scope
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(options => {
            option.addEventListener("click", function() {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //here is where we call compare hands
                compareHands(this.textContent, computerChoice);

                //Update images
                playerHand.src = `/assets/${this.textContent}.png`;
                computerHand.src = `/assets/${computerChoice}.png`;
            });
        });

    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent - cScore;
    }
    }

    const compareHands = (playerChoice, computerChoice) => {
        //update text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
        //Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
        //Check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
    }

    //Call all inner function
    startGame();
    playMatch();
   
};

game();