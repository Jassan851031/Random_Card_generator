let arrTypes = ['card--spade', 'card--heart', 'card--trevol', 'card--diamond'];

let cardNumber = Math.floor(Math.random() * 13) + 1;
let cardType = Math.floor(Math.random() * 4);

cardNumber = (cardNumber === 11)? 'J' :
             (cardNumber === 12)? 'Q' :
             (cardNumber === 13)? 'K' :
             (cardNumber === 1)? 'A' : cardNumber;

document.getElementById("cardNumber").setAttribute('value', cardNumber);
document.getElementById("cardNumber").className = "card " + arrTypes[cardType];