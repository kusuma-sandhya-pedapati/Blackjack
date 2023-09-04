/*let player={
    name:"kusu",
    chips:180
}*///object with player details
let cards=[ ]//intial conditions before game started
let sum=0
let hasBlackjack=false
let isAlive=false
let message=""
let msgEl=document.getElementById("msg-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
//playerEl.textContent=player.name +":"+player.chips
function getRandomCard(){
    let randomNo=Math.floor(Math.random()*13)+1//13 cards
    if(randomNo>10)  return 10
    else if(randomNo===11)  return 11
    else  return randomNo
}
function startGame(){
    isAlive=true//settings after game started
    hasBlackjack=false
    for(let i=cards.length;i>=0;i--){
        cards.pop()
    }
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards.push(firstCard,secondCard)
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
        message="Do u want to draw a new card?"
    }
    else if(sum===21){
        message="You've got Blackjack!!"
        hasBlackjack=true
        //player.chips=playerchips+playerchips
    }
    else{
        message="You're out of game!"
        isAlive=false
        //player.chips=0
    }
    msgEl.textContent=message
   // playerEl.textContent=player.name+player.chips

}
function newCard(){
    if(hasBlackjack===false&&isAlive===true){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
    }
}