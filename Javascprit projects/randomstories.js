// The purpose fo this program is to user input deiffreet words, so those are modify into stories 
// The require is use to call the node aka the extension and the prompt sunc is the promt able to be run in javascprt browser
const prompt = require('prompt-sync')();

console.log("Type the words according to the question asked:");

// The variable state 
let name = prompt("Enter a name: ");
let adjective = prompt ("Enter an adjective: ");
let adverb = prompt("Enter a adverb ");
let verb = prompt("Enter a verb: ");
let predicate = prompt("Enter a predicate ")
let preposition = prompt("Enter a preposition ")
let article = prompt("Enter an article ")
// Also for running javascpirt the cd was necessary

function Thestory(a,b,c,d,e,f,g) {
   console.log("One day. ",a," decide to ",c," ",d," " ,f ," The ",b," lake and he has ",g," apple which he gave to the ",e,"." );
}
// Side Idea , aks teh user for a messup version of the correct version
Thestory(name,adjective,adverb,verb,predicate,preposition,article);