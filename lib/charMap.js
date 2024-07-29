/**
 * A mapping of characters from the standard keyboard to their corresponding 
 * characters in a different script or language.
 * 
 * This object includes mappings for both lowercase and uppercase letters, as 
 * well as punctuation marks, and their inverse mappings.
 * 
 * @type {Object.<string, string>}
 * @property {string} 'q' - Corresponds to 'ض'
 * @property {string} 'w' - Corresponds to 'ص'
 * @property {string} 'e' - Corresponds to 'ث'
 * @property {string} 'r' - Corresponds to 'ق'
 * @property {string} 't' - Corresponds to 'ف'
 * @property {string} 'y' - Corresponds to 'غ'
 * @property {string} 'u' - Corresponds to 'ع'
 * @property {string} 'i' - Corresponds to 'ه'
 * @property {string} 'o' - Corresponds to 'خ'
 * @property {string} 'p' - Corresponds to 'ح'
 * @property {string} '[' - Corresponds to 'ج'
 * @property {string} ']' - Corresponds to 'چ'
 * @property {string} 'a' - Corresponds to 'ش'
 * @property {string} 's' - Corresponds to 'س'
 * @property {string} 'd' - Corresponds to 'ي'
 * @property {string} 'f' - Corresponds to 'ب'
 * @property {string} 'g' - Corresponds to 'ل'
 * @property {string} 'h' - Corresponds to 'ا'
 * @property {string} 'j' - Corresponds to 'ت'
 * @property {string} 'k' - Corresponds to 'ن'
 * @property {string} 'l' - Corresponds to 'م'
 * @property {string} ';' - Corresponds to 'ك'
 * @property {string} '\'' - Corresponds to 'گ'
 * @property {string} 'z' - Corresponds to 'ظ'
 * @property {string} 'x' - Corresponds to 'ط'
 * @property {string} 'c' - Corresponds to 'ز'
 * @property {string} 'v' - Corresponds to 'ر'
 * @property {string} 'b' - Corresponds to 'ذ'
 * @property {string} 'n' - Corresponds to 'د'
 * @property {string} 'm' - Corresponds to 'ء'
 * @property {string} ',' - Corresponds to 'و'
 * @property {string} '.' - Corresponds to 'ز'
 * @property {string} '/' - Corresponds to '؟'
 * @property {string} 'Q' - Corresponds to 'ض'
 * @property {string} 'W' - Corresponds to 'ص'
 * @property {string} 'E' - Corresponds to 'ث'
 * @property {string} 'R' - Corresponds to 'ق'
 * @property {string} 'T' - Corresponds to 'ف'
 * @property {string} 'Y' - Corresponds to 'غ'
 * @property {string} 'U' - Corresponds to 'ع'
 * @property {string} 'I' - Corresponds to 'ه'
 * @property {string} 'O' - Corresponds to 'خ'
 * @property {string} 'P' - Corresponds to 'ح'
 * @property {string} '{' - Corresponds to 'ج'
 * @property {string} '}' - Corresponds to 'چ'
 * @property {string} 'A' - Corresponds to 'ش'
 * @property {string} 'S' - Corresponds to 'س'
 * @property {string} 'D' - Corresponds to 'ي'
 * @property {string} 'F' - Corresponds to 'ب'
 * @property {string} 'G' - Corresponds to 'ل'
 * @property {string} 'H' - Corresponds to 'ا'
 * @property {string} 'J' - Corresponds to 'ت'
 * @property {string} 'K' - Corresponds to 'ن'
 * @property {string} 'L' - Corresponds to 'م'
 * @property {string} ':' - Corresponds to 'ك'
 * @property {string} '"' - Corresponds to 'گ'
 * @property {string} 'Z' - Corresponds to 'ظ'
 * @property {string} 'X' - Corresponds to 'ط'
 * @property {string} 'C' - Corresponds to 'ز'
 * @property {string} 'V' - Corresponds to 'ر'
 * @property {string} 'B' - Corresponds to 'ذ'
 * @property {string} 'N' - Corresponds to 'د'
 * @property {string} 'M' - Corresponds to 'ء'
 * @property {string} '<' - Corresponds to 'و'
 * @property {string} '>' - Corresponds to 'ز'
 * @property {string} '?' - Corresponds to '؟'
 * @property {string} 'ئ' - Corresponds to 'm'
 */
const charMappings = {
    'q': 'ض', 'w': 'ص', 'e': 'ث', 'r': 'ق', 't': 'ف', 'y': 'غ', 'u': 'ع', 'i': 'ه', 'o': 'خ', 'p': 'ح', '[': 'ج', ']': 'چ',
    'a': 'ش', 's': 'س', 'd': 'ي', 'f': 'ب', 'g': 'ل', 'h': 'ا', 'j': 'ت', 'k': 'ن', 'l': 'م', ';': 'ك', '\'': 'گ',
    'z': 'ظ', 'x': 'ط', 'c': 'ز', 'v': 'ر', 'b': 'ذ', 'n': 'د', 'm': 'ء', ',': 'و', '.': 'ز', '/': '؟',
    'Q': 'ض', 'W': 'ص', 'E': 'ث', 'R': 'ق', 'T': 'ف', 'Y': 'غ', 'U': 'ع', 'I': 'ه', 'O': 'خ', 'P': 'ح', '{': 'ج', '}': 'چ',
    'A': 'ش', 'S': 'س', 'D': 'ي', 'F': 'ب', 'G': 'ل', 'H': 'ا', 'J': 'ت', 'K': 'ن', 'L': 'م', ':': 'ك', '"': 'گ',
    'Z': 'ظ', 'X': 'ط', 'C': 'ز', 'V': 'ر', 'B': 'ذ', 'N': 'د', 'M': 'ء', '<': 'و', '>': 'ز', '?': '؟',
    'ض': 'q', 'ص': 'w', 'ث': 'e', 'ق': 'r', 'ف': 't', 'غ': 'y', 'ع': 'u', 'ه': 'i', 'خ': 'o', 'ح': 'p', 'ج': '[', 'چ': ']',
    'ش': 'a', 'س': 's', 'ي': 'd', 'ب': 'f', 'ل': 'g', 'ا': 'h', 'ت': 'j', 'ن': 'k', 'م': 'l', 'ك': ';', 'گ': '\'',
    'ظ': 'z', 'ط': 'x', 'ز': 'c', 'ر': 'v', 'ذ': 'b', 'د': 'n', 'ء': 'm', 'و': ',', 'ز': '.', '؟': '/',
    'ض': 'Q', 'ص': 'W', 'ث': 'E', 'ق': 'R', 'ف': 'T', 'غ': 'Y', 'ع': 'U', 'ه': 'I', 'خ': 'O', 'ح': 'P', 'ج': '{', 'چ': '}',
    'ش': 'A', 'س': 'S', 'ي': 'D', 'ب': 'F', 'ل': 'G', 'ا': 'H', 'ت': 'J', 'ن': 'K', 'م': 'L', 'ك': ':', 'گ': '"',
    'ظ': 'Z', 'ط': 'X', 'ز': 'C', 'ر': 'V', 'ذ': 'B', 'د': 'N', 'ء': 'M', 'و': '<', 'ز': '>', '؟': '?',
    'ئ': 'm', 'ئ': 'M'
};

module.exports = charMappings;
