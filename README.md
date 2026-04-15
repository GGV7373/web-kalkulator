# Web Kalkulator

## Project Overview
Web Kalkulator is a simple web-based calculator application designed to perform basic mathematical operations and demonstrate modular JavaScript programming. The project includes implementations of factorial, Fibonacci sequence, and FizzBuzz logic, making it a great example of combining mathematical concepts with web development.

## Features
- **Factorial Calculation**: Computes the factorial of a given number.
- **Fibonacci Sequence**: Generates Fibonacci numbers up to a specified limit.
- **FizzBuzz**: Implements the classic FizzBuzz logic for a range of numbers.

## Technologies Used
- **HTML**: For structuring the web interface.
- **CSS**: For styling the application.
- **JavaScript (ES6)**: For implementing the logic and interactivity.
  - Modular JavaScript files for better code organization.
  - Test files to ensure the correctness of the implemented logic.

## Project Structure
```
web-kalkulator/
├── index.html          # Main HTML file
├── index.js            # Entry point for JavaScript
├── style.css           # Stylesheet
├── js/                 # JavaScript modules
│   ├── fakultet.js     # Factorial logic
│   ├── fibonacci.js    # Fibonacci logic
│   ├── fizzbuzz.js     # FizzBuzz logic
│   └── script.js       # Main script for interactivity
├── *.test.mjs          # Test files for each module
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## How to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd web-kalkulator
   ```
3. Open `index.html` in your browser to use the calculator.

## Websites
From GitHub Pages:
https://ggv7373.github.io/web-kalkulator/

And from Netlify:
https://web-kalk.netlify.app/


## Testing
The project includes test files for each module to ensure the correctness of the implemented logic. To run the tests:
1. Install Node.js if not already installed.
2. Run the test files using Node.js:
   ```bash
   node fibonacci.test.mjs
   node fakultet.test.mjs
   node fizzbuzz.test.mjs
   ```

## Future Improvements
- Add more mathematical operations.
- Enhance the user interface with modern design frameworks.
- Implement a backend for saving user calculations.

## License
This project is open-source and available under the [MIT License](LICENSE).