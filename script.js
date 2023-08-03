const container = document.getElementById('etch-container');


function tileSorter(){
    for (let i = 0; i< 16; i++){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    container.appendChild(tile);
    }
}
tileSorter();
