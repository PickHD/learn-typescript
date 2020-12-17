// //!DECLARATION TYPE FUNCTION
function add(x: number, y: number): number {
  return x + y;
}

// //!EXPRESSION TYPE FUNCTION
let myAdd = function (x: number, y: number): number {
  return x + y;
};
// //?arrow mode
let myAnotherAdd = (x: number, y: number): number => x + y;

function combineName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + "" + lastName;
  } else {
    return firstName;
  }
}

let result1 = combineName("Taufik"); //*now worked
let result2 = combineName("Taufik", "Januar", "rachman"); //*error,cuz too many argument
let finResult = combineName("Taufik", "Januar"); //*OK

//!REST PARAMETER FUNCTION
function combineName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let myFullName = combineName("Taufik", "Januar", "Rachman");
console.log(myFullName);

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(`Card:${pickedCard.card} of ${pickedCard.suit}`);
