const setSizeButton = document.querySelector('.set-size-button');
let click = true;
setSizeButton.addEventListener('click', () =>{
    let sketchSize = prompt('Please enter a value between 2 and 100');
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
    const blackColor = document.querySelector('.black-color');
    const eraser = document.querySelector('.eraser');
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
        });
        randomizeColor.addEventListener('click', ()=>{
            tile.addEventListener('mouseover', () =>{
                tile.style.backgroundColor = randomColor();
            });
        });
        blackColor.addEventListener('click', ()=>{
            tile.addEventListener('mouseover', ()=>{
                tile.style.backgroundColor = 'black';
            });
        });
        eraser.addEventListener('click', ()=>{
            tile.addEventListener('mouseover', ()=>{
                tile.style.backgroundColor = 'white';
            })
        })

    }
    
}
// study why it works
function randomColor(){
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}
sketchStarter(16);

