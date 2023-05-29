"use strict";

// FUNZIONE PER CELLA SINGOLA
function createSquareElement(){
    let square = document.createElement('div');

    square.classList.add('square');
    return square
}

const play_button = document.getElementById('play_btn');

let clickCounter = 0;

// FUNZIONE PLAY BUTTON
play_button.addEventListener("click", function(){

    const grid = document.getElementById('grid');

    clickCounter++;
    
    if(clickCounter === 1){

        // CICLO FOR PER CREARE GRIGLIA
        for (let i = 0; i < 100; i++){

            let square = createSquareElement();
            square.innerText = i + 1;

            square.addEventListener('click',function(){
                this.classList.toggle('clicked');
                console.log(this);            
            })

            grid.append(square);
        }
    }
})