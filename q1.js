// Q1
function findWhiteSquarePosition(matrix) {
  const size = matrix.length;
  let top = 0,
    left = 0,
    height = 0,
    width = 0;

  // Loop through each row and column to find the top-left corner
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === "w") {
        top = i;
        left = j;

        // Loop to find the height of the white square
        while (i < size && matrix[i][j] === "w") {
          i++;
          height++;
        }

        // Loop to find the width of the white square
        while (j < size && matrix[top][j] === "w") {
          j++;
          width++;
        }
        // Exit the loops once the white square is found
        return { top, left, height, width };
      }
    }
  }
  return { top, left, height, width };
}

// test example
const matrix = [
  ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "w", "w", "w", "w", "w", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
];

const whiteSquarePosition = findWhiteSquarePosition(matrix);

console.log(whiteSquarePosition); //Output the object consisting of Top, left ,width, and height
