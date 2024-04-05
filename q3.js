// Q3
function findSumAndLastDivisibleBy3(string) {
  let sum = 0;
  let lastDivisibleBy3 = null;
  let currentNumber = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char >= "0" && char <= "9") {
      // Check if the character is a digit
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        const number = parseInt(currentNumber);
        if (number % 3 === 0) {
          // Check if the number is divisible by 3
          sum += number;
          lastDivisibleBy3 = number;
        }
        currentNumber = ""; // Resetting the current
      }
    }
  }
  // Check for the last number
  if (currentNumber !== "") {
    const number = parseInt(currentNumber);
    if (number % 3 === 0) {
      sum += number;
      lastDivisibleBy3 = number;
    }
  }
  return { sum, lastDivisibleBy3 };
}
const string = "The best 6 of 8 will get 9 points";
const { sum, lastDivisibleBy3 } = findSumAndLastDivisibleBy3(string);
console.log(`Sum is ${sum},\nLast Number divisible by 3 - ${lastDivisibleBy3}`); //Output
