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

//populate toolbar sprite grid with array of 5 x 1 64px sprites
    
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

//add listeners to toolbar slots for selecting active tool
    const toolBarSlots = document.querySelectorAll(".toolBarSlot");

    function addToolListeners(){
        for(i = 0; i < toolBarSlots.length; i++){
            toolBarSlots[i].addEventListener('click', makeToolActive)
        }
    }

    addToolListeners();

//create variable for storing active tool, and function to make a tool active on click event    
    let activeTool;

    function makeToolActive(e){
        if(e.currentTarget.classList.contains("hoe")){
            activeTool = "hoe";
            console.log("Active Tool is: " + activeTool);
            toolBarSlots[0].classList.add("hoeSelected");
        }
        if(e.currentTarget.classList.contains("waterCan")){
            activeTool = "waterCan";
            console.log("Active Tool is: " + activeTool);
            toolBarSlots[1].classList.add("waterCanSelected");
        }
    }

//function to highlight selected tool


//function to draw tool sprites (can add remaining tools in this function)
    function drawToolSprites(){
        toolBarSlots[0].classList.add("hoe");
        toolBarSlots[1].classList.add("waterCan");
    }

    drawToolSprites();

//set variable to access all bg sprites 
    const bgSprites = document.querySelectorAll(".bgSpriteChunk");
//check that node list of bgSprites is correct
    console.log(bgSprites);

//function to paint all bgSprites with grass
    function paintGrassSprites(){
        for(i = 0; i < bgSprites.length; i++){
            bgSprites[i].classList.add("grass");
        }
    }
    paintGrassSprites();

//add an event listener to each bgSprite that waits for tool use on click
    function addToolListenerToNode(){
        for(i = 0; i < bgSprites.length; i++){
            bgSprites[i].addEventListener('click', useTool);
        }
    }
    addToolListenerToNode();

//function to use active tool on click event against bgSprites
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
        if(activeTool == "waterCan"){
        if(e.currentTarget.classList.contains("tilled")){
        switch(e.currentTarget.classList.contains("wateredSoil")){
            case false:
                e.currentTarget.classList.add("wateredSoil");
                e.currentTarget.classList.remove("tilled");
                console.log("You watered soil on sprite #:" + e.currentTarget.id);
                break;
            case true:
                console.log("You've already watered soil on sprite #:" + e.currentTarget.id);
                break;
        }
        }
        }
    }



//add event listeners to all bg sprites

/*
function addListeners(){
    for(i = 0; i < 256; i++){
        let currentChunk = document.getElementById("bgSprite-" + i);

        currentChunk.addEventListener("click", console.log("Hello"));
    }
}


function drawInventorygrid(){
    for (i = 0; i < 20; i++){
    let bagSlot = document.createElement("div");
    
    bagSlot.classList.add("bagSlot");
    inventoryGrid.appendChild(bagSlot); 
    }
}
*/