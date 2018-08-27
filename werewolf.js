// normal else/if statements 
let moonPhase = 'solar eclipse'

if (moonPhase === 'full') {
  console.log ('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log ('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log ('Back on two feet');
} else {
  console.log ('Invalid moon phase');
}

// switch/ case statements
let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.logo('Arms and legs are getting hairier.');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default: 
    console.log('Invalid moon phase');
    break;
} 

// another way of using else/if statements

let isLocked = false;
isLocked ? console.log("You will need a key to open the door.") : console.log("You will not need a key to open the door.");

let isCorrect = true;
isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = 'Love That!.';
favoritePhrase ? console.log ("Love That!") : console.log("I don't love that");
