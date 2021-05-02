//populate BG sprite grid with array of 16 x 16 64px sprites

const bgSpriteGrid = document.getElementById("bgSpriteGrid");

function drawBGSpriteGrid(){
    for(i = 0; i < 256; i++){
    let gridIDCounter = i;
    let bgSpriteChunk = document.createElement("div");
    bgSpriteChunk.id = "bgSprite-" + i;
    bgSpriteChunk.innerHTML = gridIDCounter;
    bgSpriteChunk.classList.add("bgSpriteChunk");
    bgSpriteGrid.appendChild(bgSpriteChunk);
    gridIDCounter++;
    }
}
drawBGSpriteGrid();

const toolBarGrid = document.getElementById("toolBarGrid");

function drawToolBarGrid(){
    for(i = 0; i < 5; i++){
    let gridIDCounter = i;
    let toolBarSlot = document.createElement("div");
    toolBarSlot.id = "toolBarSlot-" + i;
    toolBarSlot.classList.add("toolBarSlot");
    toolBarGrid.appendChild(toolBarSlot);
    gridIDCounter++;
    }
}

drawToolBarGrid();

const toolBarSlots = document.querySelectorAll(".toolBarSlot");

function addToolListeners(){
    for(i = 0; i < toolBarSlots.length; i++){
        toolBarSlots[i].addEventListener('click', makeToolActive)
    }
}

addToolListeners();

let activeTool;

function makeToolActive(e){
    if(e.currentTarget.classList.contains("hoe")){
        activeTool = "hoe";
        console.log("Active Tool is: " + activeTool);
        toolBarSlots[0].classList.add("hoeSelected");
    }
}

function drawHoeTool(){
    toolBarSlots[0].classList.add("hoe");
}

drawHoeTool();

const bgSprites = document.querySelectorAll(".bgSpriteChunk");

console.log(bgSprites);
addListenerToNode();

function paintGrassSprites(){
    for(i = 0; i < bgSprites.length; i++){
        bgSprites[i].classList.add("grass");
    }
}
paintGrassSprites();


function addListenerToNode(){
    for(i = 0; i < bgSprites.length; i++){
        bgSprites[i].addEventListener('click', useTool);
    }
}


function useTool(e){
    if(activeTool == "hoe"){
    switch(e.currentTarget.classList.contains("tilled")){
        case false:
            e.currentTarget.classList.add("tilled");
            e.currentTarget.classList.remove("grass");
            console.log("You tilled soil on sprite #:" + e.currentTarget.id);
            break;
        case true:
            console.log("You've already tilled sprite #:" + e.currentTarget.id);
            break;
    }
    }
}

//addListeners();

//add event listeners to all bg sprites

function addListeners(){
    for(i = 0; i < 256; i++){
        let currentChunk = document.getElementById("bgSprite-" + i);

        currentChunk.addEventListener("click", console.log("Hello"));
    }
}



/*
function drawInventorygrid(){
    for (i = 0; i < 20; i++){
    let bagSlot = document.createElement("div");
    
    bagSlot.classList.add("bagSlot");
    inventoryGrid.appendChild(bagSlot); 
    }
}
*/