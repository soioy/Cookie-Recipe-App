const myButton = document.getElementById("start");
var portion = parseInt(document.getElementById("cookie_num"));

function start_button(){
  window.location.href = "recipebook.html";
} 
function cookie_button(){
  window.location.href = "cookie-recipe.html";
} 
function banana_button(){
  window.location.href = "banana-recipe.html";
} 
  
/* 
    w_sugar=100, 
    b_sugar=110,
    egg=1, 
    flour=160,
    choc_chip=175,
    
*/
    /*   
    nw_sugar = w_sugar/portion_amount,
    nb_sugar = b_sugar/portion_amount,
    n_egg = egg/portion_amount,
    n_flour = flour/portion_amount,
    nchoc_chip = choc_chip/portion_amount;
    */

function cookie_calculate(){
    // portion is the number of cookies the user wants to make
    let portion = parseInt(document.getElementById("cookie_num").value);
    

    if (!portion || portion <= 0) {
            alert("enter some damn cookies bruh.");
            input.focus();
            return;
        }

    const act_portion = 8;    
    let portion_amount = portion / act_portion;

    // calculate the portion of ingredients needed
    let butter = 114 * portion_amount,
        sugar = 100 * portion_amount,
        brown_sugar = 110 * portion_amount, 
        egg = 1 * portion_amount,
        flour = 160 * portion_amount,
        choc_chip = 175 * portion_amount,
        vanilla = 1 * portion_amount,
        salt = 0.5 * portion_amount,
        baking_soda = 0.5 * portion_amount;

    // Save result to localStorage
    localStorage.setItem("n_butter", butter);
    localStorage.setItem("n_sugar", sugar);
    localStorage.setItem("n_brown_sugar", brown_sugar);
    localStorage.setItem("n_eggs", egg);
    localStorage.setItem("n_flour", flour);
    localStorage.setItem("n_choc_chip", choc_chip);
    localStorage.setItem("n_vanilla", vanilla);
    localStorage.setItem("n_salt", salt);
    localStorage.setItem("n_baking_soda", baking_soda);

    // Redirect to result page
    window.location.href = "cookie-result.html";
}

/*
function banana_calculate(){
    const act_portion = 24;

    // portion is the number of cookies the user wants to make
    let portion = parseInt(document.getElementById("banana_num").value);
    let portion_amount = portion / act_portion;

    // calculate the portion of ingredients needed
    let butter = 114 * portion_amount,
        sugar = 100 * portion_amount,
        brown_sugar = 110 * portion_amount, 
        egg = 1 * portion_amount,
        flour = 160 * portion_amount,
        choc_chip = 175 * portion_amount,
        vanilla = 1 * portion_amount,
        salt = 0.5 * portion_amount,
        baking_soda = 0.5 * portion_amount;

    // Save result to localStorage
    localStorage.setItem("n_butter", butter);
    localStorage.setItem("n_sugar", sugar);
    localStorage.setItem("n_brown_sugar", brown_sugar);
    localStorage.setItem("n_eggs", egg);
    localStorage.setItem("n_flour", flour);
    localStorage.setItem("n_choc_chip", choc_chip);
    localStorage.setItem("n_vanilla", vanilla);
    localStorage.setItem("n_salt", salt);
    localStorage.setItem("n_baking_soda", baking_soda);

    // Redirect to result page
    window.location.href = "cookie-result.html";
}
*/
