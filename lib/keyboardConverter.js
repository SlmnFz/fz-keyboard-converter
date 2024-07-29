const charMappings = require('./charMap');

/**
 * Converts the input string based on predefined character mappings.
 * 
 * This function takes an input string, looks up each character in the 
 * `charMappings` object, and replaces it with the corresponding mapped 
 * character. If a character does not have a mapping, it is kept as-is.
 * 
 * @param {string} input - The input string to be converted.
 * @returns {string} - The converted string with characters replaced 
 * based on the mappings.
 */
function convertInput(input) {
    let result = '';
    for (let char of input) {
        result += charMappings[char] || char;
    }
    return result;
}

module.exports = convertInput;
