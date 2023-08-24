const setSizeButton = document.querySelector('.set-size-button');
let click = true;
setSizeButton.addEventListener('click', () =>{
    let sketchSize = prompt('enter a size between 1 and 100');
    if (sketchSize >= 2 && sketchSize <= 100){
        sketchStarter(sketchSize);
    } else {
        alert('Enter a value between 1 and 100!!');
    }
    
})


function sketchStarter(value){
    const resetButton = document.querySelector('.reset');
    const container = document.querySelector('.sketch-pad');
    const textContainer = document.querySelector('.text-container');
    const currentSizeText = document.createElement('p');
    const randomizeColor = document.querySelector('.randomize-color');
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for(let i = 0; i < value * value; i++){
        const tile = document.createElement('div');
        container.appendChild(tile);
        textContainer.appendChild(currentSizeText);
        currentSizeText.textContent = 'Current size is ' + value;
        tile.style.backgroundColor = 'white';
        tile.addEventListener('mouseover', () =>{
            tile.style.backgroundColor = 'black';
        });
        resetButton.addEventListener('click', () =>{
            tile.style.backgroundColor = 'white';
            currentSizeText.textContent = '';
        });
        randomizeColor.addEventListener('click', ()=>{
            tile.addEventListener('mouseover', () =>{
                tile.style.backgroundColor = randomColor();
            });
        })

    }
    
}

function randomColor(){
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}
sketchStarter(16);

