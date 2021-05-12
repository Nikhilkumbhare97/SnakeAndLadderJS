console.log("Welcome To Snake And Ladder Game");

const START_POSITION = 0;
const END_POSITION = 100;
const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;

var currentPosition = START_POSITION;

rollDie = () => {
    let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
    return diceNumber;
}

option = () => {
    let checkOption = Math.floor(Math.random() * 10) % 3;
    let die = rollDie();
    switch (checkOption) {
        case LADDER:
            if ((currentPosition + die) > END_POSITION) {
                console.log("Out of Reach")
                currentPosition += 0;
                break;
            } else {
                currentPosition += die;
                console.log("Player got Ladder and it jump by "+ die +" position and it Move to position : " + currentPosition);
                break;
            }
        case SNAKE:
            if ((currentPosition - die) >= START_POSITION) {
                currentPosition -= die;
                console.log("Player got Snake and it downs by " + die + " position and it Move to position : " + currentPosition);
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
    return currentPosition;
}

winPosition = () => {
    while (currentPosition < END_POSITION) {
        var lastPosition = option();
        if (lastPosition == END_POSITION){
            console.log("Player Reach the Winning Position And Won the Game");
        }
    }
}
winPosition();