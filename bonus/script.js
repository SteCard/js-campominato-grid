"use strict";

// FUNZIONE PER CREARE GRIGLIA
function createNewGame(){
    const grid = document.getElementById('grid');

    // LIVELLO DIFFICOLTA'
    const difficulty = parseInt(document.getElementById('difficulty').value);

    // SVUOTARE GRIGLIA
    grid.innerHTML = '';
    
    //INVOCO FUNZIONE PER CREARE SINGOLE CELLE
    createCells(difficulty);
}

// FUNZIONE PER CREARE CELLE
function createCells(level){

    let cellsNumber;
    switch(level){
        case 1:
            cellsNumber = 100;
            break;
        case 2:
            cellsNumber = 81;
            break;
        case 3:
            cellsNumber = 49;
            break;
    }

    //GENERO LE CASELLE DA SCRIVERE NELLA GRIGLIA
    for (let i = 0; i < cellsNumber; i++){

        const square = document.createElement('div');

        let cellsPerRow = Math.sqrt(cellsNumber);

        square.classList.add('square');
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = square.style.width;
        square.innerText = i + 1;

        square.addEventListener('click',function(){
            this.classList.add('clicked');
            
        })

        grid.append(square);
    }
}

const button = document.getElementById('play_btn')

// FUNZIONE PLAY BUTTON
button.addEventListener("click", function(){

    createNewGame();
})