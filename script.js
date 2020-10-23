
/**
 * Will generate a rondom number and display it on the DOM
 */
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber);
}

/**
 * Generates a random number between 0-100 and returns it
 * @returns {number} the random number that was generated
 */
function getRandomNumber() {
    const randomNumber = Math.random() * 100;
    return Math.round(randomNumber);
}

/**
 * Places the passed number into the DOM along with a comma and space
 * @param {Number} number number that will be displayen in the DOM
 */
function addNumberToPage(number) {
    const div = document.getElementById('results');
    div.append(number + ', ');
}