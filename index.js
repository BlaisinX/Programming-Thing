// /!\ please comment all your stuff please :^) /!\


const pleaseHelp = require("./tester");
const testFile = require("./files/javascript/file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const btnExit = require("./files/javascript/okay");
const rolimonStuff = require("./files/javascript/rolimonStuff");
const ticTacToe = require("./files/javascript/ticTacToe");

const scanner = require('prompt-sync')({ sigint: true }); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

var continueLoop = true;
var testing = testFile.readJSON().testing; //imports the object from "thisIsAFile.json" then looks for the testing property

// main loop of the program
//its gonna loop everything in here while they say true
//otherwhise, its gonna exit the loop and terminate the program

while (String(continueLoop).toLowerCase() == "true") {
  
  //if we are testing, skip asking for user input.
  //this makes TravisCI work
  if(testing == "true"){
    var select = Number(scanner("What do you want to do?\n1.)Testing random stuff\n2.)Tic-tac-toe!"));
  } else {
    console.log("Testing is false. Defaulting select to 1...");
    var select = 1;
  }
  switch (select){
    //case 1: testing random functions
    case 1:
      btnExit.bananas(); //19 dollar fortnite gift card
      //rolimonStuff.rolimonRequest();
      //lmao rolimon stuff doesnt work lol

      if(testing == "true"){
        //I got a question for you: what's heavier, a kilogram o steel o a kilogram o feathers?
        var weight = String(scanner("I got a question for ya, what's heavier: a kilogramme of steel o a kilogramme o feathers?")).toLowerCase();
        console.log(testFile.steelOrFeathers(weight)); //I got a question for ya
      } else {
        console.log("Testing is false. Skipping steelOrFeathers...");
      }
      //DONT UNCOMMENT THIS LINE
      //IT BREAKS EVERYTHING. LOL!
      //testFile.intentionallyBreak(69);
      break;

    //case 2: tic-tac-toe
    case 2:
      if(testing == "true"){
        ticTacToe.ticTacToe();
      } else {
        console.log("Testing is false. Skipping ticTacToe...")
      }
      break;
  }

  //ask if they wanna continue or not
  if(testing == "true"){
    continueLoop = scanner('Do you wish to continue? Enter "true" or "false." ');
  } else {
    console.log("Testing is false. Defaulting continueLoop to false...")
    continueLoop = false;
  }
}