const scanner = require('prompt-sync')({ sigint: true });
const fs = require('fs'); //working with json can be found right in here: https://attacomsian.com/blog/nodejs-read-write-json-files

//intentionally breaks the program. lol!
function intentionallyBreak(){
  //idk if its right or not, but it breaks. lol!
  throw intentionalException;
}

function ninePlusTen(){
  //first, ask the user whats 9 + 10
  var num = Number(scanner("What's nine plus ten? "));

  //select an outcome based on what they inputed
  switch (num) {
    case 19:
      console.log("Correct");
      break;

    case 21:
      console.log("You stupid");
      break;

    case 87:
      console.log("WAS THAT THE BITE OF 87");
      break;

    default:
      console.log("no");
  }
  //prints a blank line just for neatness sake
  console.log();
}

function steelOrFeathers(paramWeight){
  //what they put in
  switch (paramWeight) {
    case "feathers":
      console.log("idiot");
      break;
    
    case "steel":
      console.log("That's right. It's a kilogram o steel, because steel is heavier than feathers!");
      break;
    
    case "neither":
      console.log("good job");
      break;

    default:
      console.log("no");
  }
  //prints a blank line just for neatness sake
  console.log();
}

function readJSON(){
  try {

    const data = fs.readFileSync('files/JSON/thisIsAFile.json', 'utf8');

    // parse JSON string to JSON object
    const jsonOBJ = JSON.parse(data);

    return jsonOBJ;

  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
}

//export this bad boy
module.exports = {ninePlusTen, steelOrFeathers, readJSON, intentionallyBreak};
