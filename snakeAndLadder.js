console.log("Welcome To Snake And Ladder Game");

const START_POSITION = 0;
const END_POSITION = 100;

rollDie = () => {
    let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
    console.log("Dice Number : " + diceNumber);
}
rollDie();