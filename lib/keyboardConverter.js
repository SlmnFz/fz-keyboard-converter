const charMappings = require('./charMap');

/**
 * Converts characters in the input string based on predefined character mappings.
 * Handles errors related to input type and mapping issues.
 *
 * @param {string} input - The string to be converted.
 * @returns {string} - The converted string with characters replaced based on mappings.
 * @throws {TypeError} - If the input is not a string.
 */
function convertInput(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    let result = '';

    try {
        for (let char of input) {
            // Convert character using mappings or retain if not found
            result += charMappings[char] || char;
        }
    } catch (error) {
        // Handle unexpected errors during conversion
        console.error('An error occurred during conversion:', error);
        throw new Error('Conversion failed due to an unexpected error.');
    }

    return result;
}

module.exports = convertInput;
