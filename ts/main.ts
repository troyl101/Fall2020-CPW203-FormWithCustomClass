class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

//test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/


window.onload = function(){
    let addBtn = 
    <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("add video game was called"); //test to see if code is working, user doesn't see it

    if(isAllDataValid()){ //check if the data is valid
        let game = getVideoGame(); // if valid get the data off of form
        displayGame(game); //display data
    }

}

// add validation code
function isAllDataValid(){
    return true;
}


function displayGame(myGame:VideoGame):void{ 
    // display video game below the form

}

/**
 * Gets all game data from the form 
 * and returns it in a VideoGame object
 */
function getVideoGame():VideoGame{
    // TODO: create game object
    let game = new VideoGame();

    // TODO: populate with data from the form
    let titleInput = 
        <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    let priceInput = 
    <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value); //parseFloat to convert to a number

    let ratingInput = 
        <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = 
        <HTMLInputElement>document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    /* Another way to do ^^
    if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }
    */

    // TODO: return game
    return game;
}