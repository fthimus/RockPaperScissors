const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
    const choicesLength = choices.length;
    const seed = Math.random();

    for (let i = 1; i < choicesLength; i++) {
        if (seed > (choicesLength - i) / choicesLength && seed < (choicesLength - (i - 1)) / choicesLength)
            return seed + choices[choicesLength - i];
    }
    return choices[0];
}

console.log(getComputerChoice());