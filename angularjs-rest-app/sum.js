function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Test cases
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30];
const array3 = [5, 10, -2, 8];

console.log(sumArray(array1)); // Output: 15
console.log(sumArray(array2)); // Output: 60
console.log(sumArray(array3)); // Output: 21

