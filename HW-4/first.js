// 1. Get user input from textboxes @
// 2. Have at least 5 different decisions in the story @
// 3. Use if, else if, else, and/or switch statements @
// 4. Use for, while or do-while loops
// 5. Create and call functions that take parameters @
// 6. Have at least one function return a value. @
// 7. Update styles and images from your JavaScript. @
// 8. Allow the user to restart the story. @

// Author: Claire Spain
// Updated: 10 Feb 2020
// Purpose: Web Technologies HW 4
// ಥ╭╮ಥ

// var game = false
//Tables
function fn1() {
  var myChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("question");
  if (myChoice === "Monster Guts") {
    document.getElementById("mainImage").src = "img/bazaar.jpg"
    document.getElementById("choice").style.display = "none";
    document.getElementById("btnSubmit").style.display = "none";

    document.getElementById("choice2").style.display = "block";
    document.getElementById("btnSubmit2").style.display = "block";
    myQuestion.innerHTML = "The table full of oozing monster giblets catches your eye in an instant, the stench of the raw meat soaks into the market air, and a nose-blind elf stands at the table, using a large cleaver to hack away at the monster meat. There are free samples, do you take some? ";

  } else if (myChoice === "Beverages") {
    document.getElementById("mainImage").src = "img/bazaar.jpg"
    document.getElementById("choice").style.display = "none";
    document.getElementById("btnSubmit").style.display = "none";

    document.getElementById("choice3").style.display = "block";
    document.getElementById("btnSubmit3").style.display = "block";
    myQuestion.innerHTML = "A loud, belch echoes through the market. 'That one had some Kick!' the dwarf proudly pats a half-empty keg. 'Bring yer mugs, and Ol' Bugman will fill ye up, for some coin of course!'  Several travelers happily crowd the table, eager for a taste of the renown Bugman’s Brew. Do you buy some brew?";

  } else if (myChoice === "Weapons") {
    document.getElementById("mainImage").src = "img/bazaar.jpg"
    document.getElementById("choice").style.display = "none";
    document.getElementById("btnSubmit").style.display = "none";

    document.getElementById("choice4").style.display = "block";
    document.getElementById("btnSubmit4").style.display = "block";
    myQuestion.innerHTML = "Do you buy a Sword or an Axe?";

  } else {
    alert("You typed it in wrong, you dummy. Try again.");
  }
}
//Monster parts do you take some?
function fn2() {
  var guts = document.getElementById("choice2").value;
  var myQuestion = document.getElementById("question");
  if (guts === "Yes") {
    document.getElementById("mainImage").src = "img/bazaar.jpg"
    document.getElementById("choice2").style.display = "none";
    document.getElementById("btnSubmit2").style.display = "none";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";


    myQuestion.innerHTML = " You shove the monster guts into your pocket. Do you choose the table with Beverages or Weapons?";
  } else if (guts === "No") {
    document.getElementById("mainImage").src = "img/bazaar.jpg"
    document.getElementById("choice2").style.display = "none";
    document.getElementById("btnSubmit2").style.display = "none";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";

    myQuestion.innerHTML = " Do you choose the table with Beverages or Weapons?";
  } else {
    alert("This is a Yes or No answer.");
  }
}

//Beverages Do you take some Ale?
function fn3() {
  var ale = document.getElementById("choice3").value;
  var myQuestion = document.getElementById("question");
  if (ale === "Take Ale") {
    document.getElementById("mainImage").src = "img/ale.jpg"
    document.getElementById("choice3").style.display = "none";
    document.getElementById("btnSubmit3").style.display = "none";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";


    myQuestion.innerHTML = " You give the dwarf two coins. You take the ale and dump it into your backpack. Do you choose the table with Monster Guts or Weapons?";
  } else if (ale === "Don't take Ale") {
    document.getElementById("mainImage").src = "img/bazaar.jpg"
    document.getElementById("choice3").style.display = "none";
    document.getElementById("btnSubmit3").style.display = "none";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";

    myQuestion.innerHTML = " Do you choose the table with Beverages or Weapons?";
  } else {
    alert("Take Ale or Don't take Ale?");
  }
}

//Do you buy a sword or an Axe
function fn4() {
  var weapon = document.getElementById("choice4").value;
  var myQuestion = document.getElementById("question");
  if (weapon === "Axe") {
    document.getElementById("mainImage").src = "img/axe.jpg"
    document.getElementById("choice4").style.display = "none";
    document.getElementById("btnSubmit4").style.display = "none";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";


    myQuestion.innerHTML = " You give the peddler five coins. 'You have a gen-u-ine eye fer quality there, Missy. Ol' ma jus' used that one fer her bunions, and it cut through em like butter!' Bobert says. You have aquired: Buneon-Slayer.";
  } else if (weapon === "Sword") {
    document.getElementById("mainImage").src = "img/shortsword.jpg"
    document.getElementById("choice4").style.display = "none";
    document.getElementById("btnSubmit4").style.display = "none";

    document.getElementById("choice").style.display = "block";
    document.getElementById("btnSubmit").style.display = "block";

    myQuestion.innerHTML = " You give the peddler four coins. 'An excellent choice, Madam. Starlight steel will hew through flesh and armor alike... Unfortunately, you purchased a sword of regular steel.' Robert somberly says. You have aquired: Great-Value brand Sword.";
  } else {
    alert("Axe or Sword?");
  }

}

function restart(){
location.reload();
}
