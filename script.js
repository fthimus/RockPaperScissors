const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choicesLength = choices.length;
    const seed = Math.random();

    for (let i = 1; i < choicesLength; i++) {
        if (seed > (choicesLength - i) / choicesLength && seed < (choicesLength - (i - 1)) / choicesLength)
            return choices[choicesLength - i];
    }
    return choices[0];
}

const getHumanChoice = () => {
    const humanChoice = prompt("Rock? Paper? Scissors?");
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].toUpperCase() == humanChoice.toUpperCase())
            return choices[i];
    }
    return "Invalid choice.";
}

const getChoiceIndex = (choice) => {
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].toUpperCase() == choice.toUpperCase())
            return i;
    }
    return -1;
}

const playRound = (humanChoice, computerChoice) => {
    const humanChoiceIndex = getChoiceIndex(humanChoice);
    if (humanChoiceIndex == -1) {
        console.log(humanChoice);
        return;
    }
    const computerChoiceIndex = getChoiceIndex(computerChoice);
    if (humanChoiceIndex - computerChoiceIndex == 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoiceIndex - computerChoiceIndex == 0)
        console.log(`It's a tie between ${humanChoice} and ${computerChoice}`);
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);