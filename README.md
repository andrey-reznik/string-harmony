# string-harmony

A utility class for performing various file operations such as reading, writing, appending, and inserting lines both synchronously and asynchronously. Ideal for manipulating text files efficiently in Node.js projects.

## Installation

To install the package, use the following npm command:

```shell
pnpm install string-harmony
```

## Usage

Here are some example code snippets demonstrating how to use the `string-harmony` package:

```javascript
import StringHarmony from 'string-harmony'

// Initialize with file path
const stringHarmony = new StringHarmony('path/to/your/file.txt')

  // Asynchronous usage
  (async () => {
    // Read file
    const lines = await stringHarmony.readFileAsync()
    console.log(lines)

    // Write file
    await stringHarmony.writeFileAsync(['line1', 'line2'])

    // Append line
    await stringHarmony.appendLineAsync('new line')

    // Prepend line
    await stringHarmony.prependLineAsync('first line')

    // Insert line at specific index
    await stringHarmony.insertLineAtAsync('inserted line', 1)

    // Append line at specific index
    await stringHarmony.appendLineAtAsync('appended line', 1)

    // Prepend line at specific index
    await stringHarmony.prependLineAtAsync('prepended line', 1)
  })()

// Synchronous usage
try {
  // Read file
  const lines = stringHarmony.readFileSync()
  console.log(lines)

  // Write file
  stringHarmony.writeFileSync(['line1', 'line2'])

  // Append line
  stringHarmony.appendLineSync('new line')

  // Prepend line
  stringHarmony.prependLineSync('first line')

  // Insert line at specific index
  stringHarmony.insertLineAtSync('inserted line', 1)

  // Append line at specific index
  stringHarmony.appendLineAtSync('appended line', 1)

  // Prepend line at specific index
  stringHarmony.prependLineAtSync('prepended line', 1)
} catch (error) {
  console.error(error)
}
```

### Configuration Options or Parameters

There are no specific configuration options required to use this package. Simply provide the file path during the initialization of the `StringHarmony` instance.

## API Details

### Main Functions and Methods

#### Asynchronous Methods

- `readFileAsync()`: Reads the file asynchronously and returns an array of lines.
- `writeFileAsync(lines: string[])`: Writes an array of lines to the file asynchronously.
- `appendLineAsync(line: string)`: Appends a line to the file asynchronously.
- `prependLineAsync(line: string)`: Prepends a line to the file asynchronously.
- `insertLineAtAsync(line: string, index: number)`: Inserts a line at a specified index asynchronously.
- `appendLineAtAsync(line: string, index: number)`: Appends a line after a specified index asynchronously.
- `prependLineAtAsync(line: string, index: number)`: Prepends a line before a specified index asynchronously.

#### Synchronous Methods

- `readFileSync()`: Reads the file synchronously and returns an array of lines.
- `writeFileSync(lines: string[])`: Writes an array of lines to the file synchronously.
- `appendLineSync(line: string)`: Appends a line to the file synchronously.
- `prependLineSync(line: string)`: Prepends a line to the file synchronously.
- `insertLineAtSync(line: string, index: number)`: Inserts a line at a specified index synchronously.
- `appendLineAtSync(line: string, index: number)`: Appends a line after a specified index synchronously.
- `prependLineAtSync(line: string, index: number)`: Prepend a line before a specified index synchronously.

### Parameters

- `line: string`: The line to be added to the file.
- `index: number`: The position at which the line should be inserted.

### Returns

- `readFileAsync()` and `readFileSync()`: Return an array of strings, where each string represents a line from the file.
- Other methods return `void`.

## Contributing

### Guidelines for Contributing

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Ensure that your code follows the existing coding standards.
- Write tests for your code.
- Submit a pull request.

### Coding Standards

- Follow the `eslint` rules specified in the project.
- Ensure that all new features and bug fixes are covered by tests.

### Tests

- Ensure that all tests pass before submitting a pull request.
- Write tests using `Vitest`.

## License

This package is distributed under the MIT License.

## Contact

For support or issues, you can reach out via the [issue tracker on GitHub](https://github.com/andrey-reznik/string-harmony/issues).
