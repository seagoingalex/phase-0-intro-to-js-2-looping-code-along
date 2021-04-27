let cards = [`Ada`, `Brendan`, `Ali`];
let typeOfCard = `birthday`;

function writeCards(cards,typeOfCard) {
    let recipients = [];
    for (let i = 0; i < cards.length; i++) {
        recipients.push (`Thank you, ${[cards[i]]}, for the wonderful ${typeOfCard} gift!`);
    }
return recipients;
}
console.log(writeCards(cards, typeOfCard));

function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}