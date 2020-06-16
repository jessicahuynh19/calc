const game = ()=> {
    let  pScore = 0; //two variables that are needed for global scope
    let cScore = 0;

    //Start the game
    const startGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () =>{
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
        const computerOptions = ['rock', 'paper', 'scissors'];

        const computerNumber = Math.floor(Math.random() * 3);
        
        options.forEach(options => {
            options.addEventListener("click", function() {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //here is where we call compare hands
            });
        });

    };

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
            
        }
    }

    //Call all inner function
    startGame();
    playMatch();
   
};

game();