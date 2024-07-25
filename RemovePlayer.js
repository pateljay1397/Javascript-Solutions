function eliminateNumberInCircle(n) {
  let numbers = Array.from({ length: n }, (_, i) => i + 1);
  let index = 0;

  while (numbers.length > 1) {
    // Calculate the index of the element to remove
    index = index % numbers.length;
    console.log("index", index);
    // Remove the element at the calculated index
    numbers.splice(index, 1);
    // Adjust index by only one as we have removed the element from the numbers array
    index += 1;
  }
  return numbers[0];
}

// Example usage
const input = prompt("Enter the number of players in circle: ");
const lastRemaining = eliminateNumberInCircle(input);
console.log(`The last remaining number is: ${lastRemaining}`);
