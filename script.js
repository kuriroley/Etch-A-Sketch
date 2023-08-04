const container = document.getElementById('etch-container');

        

function tileSorter(){

    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            const tile = document.createElement('div');
            tile.classList.add('tile');
        container.appendChild(tile);
        }
    }
}
tileSorter();
