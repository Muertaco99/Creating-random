const prompt = require('prompt-sync')();
console.log("This is a program with the purpose of creating a to do list to make life easier for you");

var To_do = []

var user_res = prompt("Welcome here are the option.Y for yes and added. quit to exit. Comp to roemev your accomplish task, and Del to emptied the list: ")

while (user_res != "quit") {



  if (user_res == "Y" ) {
    console.log("okey, so let add a item");

    let user_add =prompt("What do you want to add ");
    To_do.push(user_add);

    console.log(To_do);
    


 }
  else if(user_res=="Comp"){
    console.log("Just add a number of index from the item you want to remove. Remember the 1 one starts at 0");
    console.log(To_do);
    let user_chage = parseInt(prompt("Enter the index"))

    To_do.splice(user_chage,1)

  }


  else if(user_res=="Del"){
    To_do=[]
    console.log("You list has been emptied \u2665")
  }


  else if(user_res == "quit") {
    return;
 }


  else {
    console.log("Try again, the input that you had given may be inaccurate")
 }

  user_res = prompt("Welcome here are the option.Y for yes and added. quit to exit. Comp to roemev your accomplish task, and Del to emptied the list")
}
// Node is a DOM object meanwhile string is just Text

// Mistakes I made. I added a semicoon after while which made end immdetaile
// Also append is on Pathon. so I had to use push() for js



// Post note Jose, if you see this in a future thanks you for contintes I know it hard but through daily effort you would get there
// Also Jose in the future created a X version of your project which would add more depth into them