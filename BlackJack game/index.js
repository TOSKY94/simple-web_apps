let cards=[];
let sum= 0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el");
let cardsEl=document.getElementById("cards-el");
let sumEl=document.querySelector("#sum-el");

let player={
    name:"Patrick",
    chips:100
}


let playerEl=document.querySelector("#play-el");

playerEl.textContent=player.name+": $"+player.chips;

function startGame(){
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard, secondCard];
    sum= firstCard+secondCard;
    isAlive=true;
    renderGame();
}

function renderGame(){
    cardsEl.textContent="Cards: "
    

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    

    sumEl.textContent="Sum: "+sum;
    if (sum<21){
        message="Do you want to draw a new card?";
    } else if (sum===21){
        message="You have got BlackJack!!!";
        hasBlackJack=true;
    } else {
        message="You are out of the game";
        isAlive=false;
    }
    messageEl.textContent=message;   
}

function newCard(){

    let card =getRandomCard();

    sum+=card;
    cards.push(card);
    renderGame();
}

function getRandomCard(){
    let randomNum= Math.floor(Math.random() * 13)+1;

    if (randomNum<2){
        return 11
    } else if (randomNum>10){
        return 10
    } else{
        return randomNum
    }

}