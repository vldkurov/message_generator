const jokeParts = {
    setups: [
        "Atch",
        "Lettuce",
        "Boo",
    ],
    connectors: [
        "who?",
        "lettuce in, it's freezing",
        "don't cry, it's just a joke",
    ],
    punchlines: [
        "Bless you!",
        "In, it's freezing out here!",
        "Don't cry, it's just a joke!",
    ],
};

function generateJoke() {
    const setup = getRandomElement(jokeParts.setups);
    const connector = getRandomElement(jokeParts.connectors);
    const punchline = getRandomElement(jokeParts.punchlines);

    // Display the joke
    return `Knock, knock. ${setup} ${connector} ${punchline}`
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

console.log(generateJoke());