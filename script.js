const setSizeButton = document.querySelector('.set-size-button');

setSizeButton.addEventListener('click', () =>{
    let sketchSize = prompt('enter a size between 1 and 100');
    if (sketchSize >= 2 || sketchSize <= 100){
        sketchStarter(sketchSize);
    } else {
        alert('Enter a value between 1 and 100!!');
    }
    
})


function sketchStarter(value){
    const resetButton = document.querySelector('.reset');
    const container = document.querySelector('.sketch-pad');
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for(let i = 0; i < value * value; i++){
        const tile = document.createElement('div');
        container.appendChild(tile);
        tile.style.backgroundColor = 'white';
        tile.addEventListener('mouseover', () =>{
            tile.style.backgroundColor = 'black';
        })
        resetButton.addEventListener('click', () =>{
            tile.style.backgroundColor = 'white';
        })
    }
    
}

sketchStarter(16);

