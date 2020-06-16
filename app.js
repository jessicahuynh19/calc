const game = ()=> {
    let  pScore = 0; //two variables that are needed for global scope
    let cScore = 0;

    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
        });
    };
    //Call all inner function
    startGame();
   
};

game();