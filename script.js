const getComputerChoice = () => {
    const seed = Math.random();
    if (seed > (2 / 3))
        return "Rock";
    if (seed > (1 / 3) && seed < (2 / 3))
        return "Paper";
    return "Scissors";
}

console.log(getComputerChoice());