/**
 * A mapping of characters from the standard keyboard to their corresponding 
 * characters in a different script or language.
 * 
 * This object includes mappings for both lowercase and uppercase letters, as 
 * well as punctuation marks, and their inverse mappings.
 * 
 * @type {Object.<string, string>}
 */
const charMappings = {
    'q': 'ض', 'w': 'ص', 'e': 'ث', 'r': 'ق', 't': 'ف', 'y': 'غ', 'u': 'ع', 'i': 'ه', 'o': 'خ', 'p': 'ح', '[': 'ج', ']': 'چ',
    'a': 'ش', 's': 'س', 'd': 'ي', 'f': 'ب', 'g': 'ل', 'h': 'ا', 'j': 'ت', 'k': 'ن', 'l': 'م', ';': 'ك', '\'': 'گ',
    'z': 'ظ', 'x': 'ط', 'c': 'ز', 'v': 'ر', 'b': 'ذ', 'n': 'د', 'm': 'ء', ',': 'و', '.': '.', '/': '؟',
    'Q': 'ض', 'W': 'ص', 'E': 'ث', 'R': 'ق', 'T': 'ف', 'Y': 'غ', 'U': 'ع', 'I': 'ه', 'O': 'خ', 'P': 'ح', '{': 'ج', '}': 'چ',
    'A': 'ش', 'S': 'س', 'D': 'ي', 'F': 'ب', 'G': 'ل', 'H': 'ا', 'J': 'ت', 'K': 'ن', 'L': 'م', ':': 'ك', '"': 'گ',
    'Z': 'ظ', 'X': 'ط', 'C': 'ز', 'V': 'ر', 'B': 'ذ', 'N': 'د', 'M': 'ء', '<': 'و', '>': '.', '?': '؟',
    'ض': 'q', 'ص': 'w', 'ث': 'e', 'ق': 'r', 'ف': 't', 'غ': 'y', 'ع': 'u', 'ه': 'i', 'خ': 'o', 'ح': 'p', 'ج': '[', 'چ': ']',
    'ش': 'a', 'س': 's', 'ي': 'd', 'ب': 'f', 'ل': 'g', 'ا': 'h', 'ت': 'j', 'ن': 'k', 'م': 'l', 'ك': ';', 'گ': '\'', 'ک': ';',
    'ظ': 'z', 'ط': 'x', 'ز': 'c', 'ر': 'v', 'ذ': 'b', 'د': 'n', 'ء': 'm', 'و': ',', '.': '.', '؟': '/',
    'ئ': 'm', ';': 'ک', 'ی': 'd'
};

module.exports = charMappings;
