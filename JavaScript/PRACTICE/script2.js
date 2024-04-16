const fruits = ["Banana", "Orange", "Apple", "Mango"]; // Array of fruits
const fruitListElement = document.getElementById("demo");
const newFruitInput = document.getElementById("newFruit");
const addFruitButton = document.getElementById("addFruitButton");

function displayFruits() {
    const fruitList = "<ul>"; // Start of the unordered list
    fruits.forEach(fruit => {
        fruitList += `<li>${fruit}</li>`; // Add each fruit as a list item
    });
    fruitListElement.innerHTML = fruitList + "</ul>"; // Update paragraph with complete list
}

displayFruits();

addFruitButton.addEventListener("click", function() {
const newFruitName = newFruitInput.value;
if (newFruitName) {
    fruits.push(newFruitName); // Add new fruit to the array
    newFruitInput.value = ""; // Clear input field
    displayFruits(); // Update the displayed list
    }
});