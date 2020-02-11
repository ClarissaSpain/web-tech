// 1. Get user input from textboxes
// 2. Have at least 5 different decisions in the story @
// 3. Use if, else if, else, and/or switch statements
// 4. Use for, while or do-while loops
// 5. Create and call functions that take parameters
// 6. Have at least one function return a value.
// 7. Update styles and images from your JavaScript.
// 8. Allow the user to restart the story.

// Author: Claire Spain
// Updated: 10 Feb 2020
// Purpose: Web Technologies HW 4

//Tables
function fn1() {
var myChoice = document.getElementById("choice").value;
var myQuestion = document.getElementById("question");
if(myChoice === "Monster Guts")
{
    myQuestion.innerHTML = "Oh you chose green. What is your favorite food?";
}
else if(myChoice === "Beverages")
{
    myQuestion.innerHTML = "A loud, belch echoes through the market. 'That one had some Kick!' the dwarf proudly pats a half-empty keg. 'Bring yer mugs, and Ol' Bugman will fill ye up, for some coin of course!'  Several travelers happily crowd the table, eager for a taste of the renown Bugman’s Brew. Do you buy some brew?";

}
else if(myChoice === "Weapons")
{
    myQuestion.innerHTML = "You chose Red.  What is your favorite movie?";

}
else
{
    alert("You typed it in wrong, you dummy. Try again.");
}
}
