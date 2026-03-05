// List of characters
let characters = ["Garfield", "Odie", "Nermal", "Pooky", "Jon"];

// Get dropdown
let selectBox = document.getElementById("characterSelect");

// Fill dropdown using JavaScript
characters.forEach(function(character) {

    let option = document.createElement("option");
    option.value = character;
    option.text = character;

    selectBox.appendChild(option);

});


// Change image when selection changes
selectBox.addEventListener("change", function() {

    let selectedCharacter = this.value;

    if(selectedCharacter !== ""){
        document.getElementById("characterImage").src =
        "images/" + selectedCharacter + ".jpg";
    }

});