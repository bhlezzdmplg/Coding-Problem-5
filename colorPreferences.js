const readline = require('readline');

// Step 1: Set up the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 2: Create an empty array to store colors
const favoriteColors = [];

// Step 3: Function to ask for color input
function askForColor() {
  if (favoriteColors.length < 3) {
    rl.question("Enter a color you like: ", (purple) => {
      favoriteColors.push(purple); // Add the color to the array
      console.log("Current list of favorite colors:", favoriteColors); // Print the updated array
      askForColor(); // Call the function again if less than 3 colors are in the array
    });
  } else {
    console.log("You have entered 3 colors:", favoriteColors);
    rl.close(); // Close the interface when 3 colors have been entered
  }
}

// Start the process
askForColor();
