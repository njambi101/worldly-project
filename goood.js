/*function makeReservation(){
    console.log("Welcome to Flatiron Diner's dinner reservation page!");

    const customerData = {};
    customerData.firstName = prompt("What is your first name?");
    customerData.lastName = prompt("What is your last name?");
    customerData.partySize = prompt("How many people will be in your party?");
    customerData.reservationDate = prompt("Which date would you like to reserve for?");
    customerData.reservationTime = prompt("Which time would you like to reserve for?");

    function displayReservationDetails(){
        console.log(`${customerData.firstName} ${customerData.lastName} has successfully made a reservation with a party size of ${customerData.partySize} for ${customerData.reservationDate} at ${customerData.reservationTime}!`);
    }

    displayReservationDetails();
}

makeReservation();


function reserve(){
    console.log('welcom to our restorunt,please choose your dinner options');
    const foodmenue={};
    
     function displays(){
    foodmenue.fstfood = prompt("please enter your first choice;");
    foodmenue.scndfood = prompt('please enter your second food');
    foodmenue.thrdfood = prompt('please enter your third food');
      console.log("your first food is:" + `${foodmenue.fstfood}`, 'your second option is' + `${foodmenue.scndfood}`);

    }
       displays(); 
}

reserve();

const themeParkRides =['flatacoster', 'flata-ferris wheel', 'flatburger bumper cars'];
function selectThemeParkRide(){
    console.log("welcome to flatironland!");

    function display(){
        
        let words = 
        if (words === 'flatacoster'){
            console.log(`welcome to ${words}`);
        }
        else if(words ==='flata-ferris wheel'){
            console.log(`welcome to ${words}`)
        }
        else if(words === 'flatburger bumper cars'){
            console.log(`welcome to ${words}`)
        }
        else{
            console.log('error has occured')
        }

    }
    display();
}
selectThemeParkRide();
*/
//the readline methode is also a way to ask for userinput.
/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', name => {
  console.log(`Hello ${name}!`);
  readline.close();
});



const posts = ["My cat is so cute!", "I'm enjoying a lovely vacation at the Bahamas!", "FlatBook is the best website ever!"];

function makePost(addAndReturnNewPost, getSuccessMessage){
    const postText = addAndReturnNewPost();
    const successMessage = getSuccessMessage(postText);
    console.log(successMessage);
}
makePost(function () {
    const postText = prompt("Enter the text for your post:");
    posts.push(postText);
    return postText;
}, (postText) => `Your post has been successfully created! Here is the post that you made:\n\n${postText}`);
*/

/*function comments (comment){
    const users = comment();
    console.log(users);
}
comments(function (){
    const comments = prompt("enter your comment about this post")
    return comments;
    
}(comments) => `your post has been created ${comments}`)

//scope scope determines the accessibility of variables and functions at different parts of the code.
/* first scope is;-
global scope which can be accesed from anywhere whether outside or inside the function 
for example;- 
var globalVar = 'I am global';

function myFunction() {
  console.log(globalVar); // Accessible here
}

myFunction();
console.log(globalVar); // Accessible here
*/

/* function scope are accesed anywhere within the function code 
for example;-
function myFunction() {
  var functionVar = 'I am in a function';
  console.log(functionVar); // Accessible here
}

myFunction();
console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined
*/

/*block scope variables that are declared within ablock have block scope
 Block scope includes conditions and loops, such as if statements or for loops.
for example;-
if (true) {
  let blockVar = 'I am in a block';
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
*/

/*lexical scope meaning that the scope of a variable is determined by its location within the source code.
function outerFunction() {
  var outerVar = 'I am outside';

  function innerFunction() {
    console.log(outerVar); // Accessible here
  }

  innerFunction();
}

outerFunction();
*/

/*const contact =[  { name: "Alice Johnson", phoneNumber: "555-0101" },
  { name: "Bob Smith", phoneNumber: "555-0102" },
  { name: "Carol Williams", phoneNumber: "555-0103" },
  { name: "David Brown", phoneNumber: "555-0104" },
  { name: "Emma Davis", phoneNumber: "555-0105" },
  { name: "Frank Miller", phoneNumber: "555-0106" },
  { name: "Grace Lee", phoneNumber: "555-0107" },
  { name: "Henry Wilson", phoneNumber: "555-0108" },
  { name: "Iris Martinez", phoneNumber: "555-0109" },
  { name: "Jack Taylor", phoneNumber: "555-0110" }
]
*/

 let count = 0;
 while(count < 20){
    if(count * 3 === 30){
        console.log(`this is your answer ${count}`)
    }
    count ++;
 }
 



 
