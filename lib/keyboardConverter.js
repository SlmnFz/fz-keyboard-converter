const charMappings = require('./charMap');

/**
 * Converts characters in the input string based on predefined character mappings.
 * Handles errors related to input type and mapping issues.
 *
 * @param {string} input - The string to be converted.
 * @param {Object} [options] - The options for conversion.
 * @param {boolean} [options.upperCase=false] - If true, use uppercase mappings.
 * @returns {string} - The converted string with characters replaced based on mappings.
 * @throws {TypeError} - If the input is not a string.
 */
function convertInput(input, options = { upperCase: false }) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    let result = '';

    try {
        for (let char of input) {
            let mappedChar = charMappings[char] || char;

            // Convert to uppercase if the option is enabled
            if (options.upperCase) {
                mappedChar = mappedChar.toUpperCase();
            }

            result += mappedChar;
        }
    } catch (error) {
        // Handle unexpected errors during conversion
        console.error('An error occurred during conversion:', error);
        throw new Error('Conversion failed due to an unexpected error.');
    }

    return result;
}

module.exports = convertInput;
