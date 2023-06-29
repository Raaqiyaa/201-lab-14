'use strict';

let canvasElem = document.getElementById('chart')


 //Instantiate a new AppState
const appState = new AppState();

//Use a method on that AppState to load vote data from localStorage.
appState.loadVoteDataFromLocalStorage = function() {
    let voteData = localStorage.getItem(voteData)
    if (voteData) {
        this.allProducts =JSON.parse(voteData)
    }
}
 //Create a data object for chart.js using your AppState's allProducts array.
for let (i = 0; i < 5; i++) {
    let newProduct = new Product(newProducts[i].name)
    newProduct.push(newProduct)
}

 //Combine the data object with configuration information for chart.js type, colors, etc
 //Call chart.js with the configuration and the canvasElem
 









function renderChart() {
}

renderChart();
