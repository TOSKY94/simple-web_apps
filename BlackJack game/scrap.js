function createPlayer(){
    let player={
        name:document.getElementById("fname").Value,
        chips: document.getElementById("Chips").Value
    }
    playerEl1.textContent=player.name+": $"+player.chips;
    console.log(player.name)
    console.log(player.chips)
}

