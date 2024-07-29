# Fz Keyboard Converter

A Node.js package for converting keyboard inputs between Persian and English character sets using predefined mappings. This package supports conversion in both directions: from Persian to English and from English to Persian.

## Features

- Convert characters from a standard keyboard layout to a custom script or language.
- Bidirectional mapping, allowing conversion in both directions.

## Installation

To install the package, use npm:

```bash
npm install fz-keyboard-converter
```

## Usage

Here’s a basic example of how to use the `convertInput` function provided by this package:

```javascript
const convertInput = require('fz-keyboard-converter');

// Example input string
const inputString = 'sghl';

// Convert the input string
const convertedString = convertInput(inputString);

// Output the converted string
console.log(convertedString); // سلام
```

**Note**: The mappings used are specific to Persian and English keyboard layouts. Non-mapped characters remain unchanged.



## API

### `convertInput(input: string): string`

- **Description**: Converts the input string based on predefined character mappings.
- **Parameters**:
  - `input` (`string`): The input string to be converted.
- **Returns**: (`string`) The converted string with characters replaced based on the mappings.

## Character Mappings

The mappings used are defined in `charMap.js`, and include mappings for both lowercase and uppercase letters, as well as punctuation marks. The mapping object is bidirectional, which means it supports conversion from and to the standard keyboard layout.

### Example Mappings

- `'q'` maps to `'ض'`
- `'w'` maps to `'ص'`
- `'e'` maps to `'ث'`
- `'a'` maps to `'ش'`
- `'Z'` maps to `'ظ'`
- `'?' ` maps to `'؟'`

For a complete list of mappings, refer to the `charMap.js` file.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to open an issue or contact the author at [SalmanFz1681](mailto:salmanfz1681@gmail.com).
