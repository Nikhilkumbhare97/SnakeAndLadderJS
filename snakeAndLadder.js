console.log("Welcome To Snake And Ladder Game");

const START_POSITION = 0;
const END_POSITION = 100;
const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;

var currentPosition = START_POSITION;

rollDie = () => {
    let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
    console.log("Dice Number : " + diceNumber);
    return diceNumber;
}

option = () => {
    let checkOption = Math.floor(Math.random() * 10) % 3;
    switch (checkOption) {
        case LADDER:
            currentPosition += rollDie();
            console.log("Player got Ladder and it Move to position : " + currentPosition);
            break;
        case SNAKE:
            let die = rollDie();
            if ((currentPosition - die) >= START_POSITION) {
                currentPosition -= die;
                console.log("Player got Snake and it Move to position : " + currentPosition);
                break;
            } else {
                currentPosition = START_POSITION;
                console.log("Player is at Start Position Again");
                break;
            }
        default:
            currentPosition += 0;
            console.log("Player got No Play and it on position : " + currentPosition);
            break;
    }
}
option();