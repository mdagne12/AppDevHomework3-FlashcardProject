const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let currentFlashcard = flashcards[currentIndex];
let flashcardContent = currentFlashcard.term;
let showingTerm = true;


// Start with this function to simply display the card
function displayCard() {
    let cardDisplay = document.getElementById('card-content')
    cardDisplay.innerText = flashcardContent;
}

// The rest of the code you will write is apart of event listeners

// In order to flip the card
document.getElementById('flashcard').addEventListener('click', function() {
    if (showingTerm) {
        flashcardContent = currentFlashcard.definition;
        showingTerm = false;
    } else {
        flashcardContent = currentFlashcard.term;
        showingTerm = true;
    }
    displayCard();
})

// In order to switch to the next card
document.getElementById('next-btn').addEventListener('click', function(){
    if (currentIndex === flashcards.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    currentFlashcard = flashcards[currentIndex];

    // Sets the card to start on terms when you switch to a new card
    flashcardContent = currentFlashcard.term;
    showingTerm = true;
    displayCard();
})

// In order to switch to the previous card
document.getElementById('prev-btn').addEventListener('click', function(){
    if (currentIndex === 0) {
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex -= 1;
    }

    currentFlashcard = flashcards[currentIndex];
    // Sets the card to start on terms when you switch to a new card
    flashcardContent = currentFlashcard.term;
    showingTerm = true;
    displayCard();
})

// Adding new flashcards
document.getElementById('add-card-btn').addEventListener('click', function(){
    let newTerm = document.getElementById('new-term').value;
    let newDefinition = document.getElementById('new-definition').value;
    flashcards.push({
        term: newTerm,
        definition: newDefinition
    })

    document.getElementById('new-term').value = "";
    document.getElementById('new-definition').value = "";
})

// This line will display the card when the page is refreshed
window.onload = displayCard;