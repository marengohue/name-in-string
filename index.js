/// nameInString - searches for each of the letters in the name
/// inside of the given string in that same order.
function nameInString(string, name) {
    if (!string) return false;

    let lastNameLetterIndex = -1;
    return Array.from(name.toLowerCase()).every(letter => {
        const currentLetterIndex = string.indexOf(letter, lastNameLetterIndex + 1);
        if (currentLetterIndex !== -1) {
            lastNameLetterIndex = currentLetterIndex;
            return true;
        }
    });
};

module.exports = nameInString;