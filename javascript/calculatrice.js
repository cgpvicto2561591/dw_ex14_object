const inputElement = document.getElementById('calcutext');
const plusButton = document.getElementById('plus');
const moinsButton = document.getElementById('moin');



document.getElementById('calcutext').value = '0';
// Ajoute un écouteur d'événement 'click' au bouton plusButton
plusButton.addEventListener('click', function() {
    // Récupère la valeur actuelle de l'entrée et la convertit en un nombre entier
    let currentValue = parseInt(inputElement.value);

    // // Vérifie si la valeur est un nombre valide. Si ce n'est pas le cas, initialise à 0.
    // if (isNaN(currentValue)) {
    //     currentValue = 0;
    // }

    // Incrémente la valeur de 1
    currentValue++;

    // Affecte la nouvelle valeur à l'élément d'entrée
    inputElement.value = currentValue;
});


// Adds the event listener for the '-' button
moinsButton.addEventListener('click', function() {
    let currentValue = parseInt(inputElement.value);

    if (isNaN(currentValue)) {
        currentValue = 0;
    }

    currentValue--; // Uses the decrement operator
    inputElement.value = currentValue;
});

// Initializes the input value when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    inputElement.value = 0;
});