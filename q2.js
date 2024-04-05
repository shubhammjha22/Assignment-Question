// Given Array = [9,33,0,7,2,82,77]
function divideByNext(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[(i + 1) % arr.length] === 0) {
      result.push("Cannot be divided");
    } else {
      const divisionResult = arr[i] / arr[(i + 1) % arr.length]; //this make sure wrapping is done
      result.push(Number(divisionResult.toFixed(2)));
    }
  }
  return result;
}

const arr = [9, 33, 0, 7, 82, 77];
const dividedArray = divideByNext(arr);
console.log(dividedArray);
