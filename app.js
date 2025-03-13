// var head = document.querySelector('#head');
// head.style.backgroundColor = "red"
// head.style.color = "white";



// var email = document.querySelector('#email');
// var password = document.querySelector('#password');

// function login(){
//      console.log(email.value);
//      console.log(password.value);
     
// }


// var username = document.querySelector("#username");
// var h1 = document.querySelector("#greet")
// var clear = document.querySelector("#clear");

// function greeting(){
//     h1.innerHTML = "Hello " + username.value;

// }

// function clearInput(){ 
//     h1.innerHTML = "";
//  }


// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");

// function login(){
//      console.log(emailInput.value);
//      console.log(passwordInput.value);
     
     
// }
// var usernameInput = document.querySelector("#username")
// var h1 = document.querySelector("#greet")

// function greeting(){
//      h1.innerHTML = "Hello " + usernameInput.value;

// }

// function clearS(){
//      h1.innerHTML = "";

// }


// Create a simple HTML form that allows the user to enter their username, roll number, and marks for five subjects. Once the user clicks the "Create Result" button, display the following on the screen:

// Total Marks Obtained
// Percentage
// Grade


var username = document.querySelector("#username");
var rollNumber = document.querySelector("#rollno");
var engMarks = document.querySelector("#engmarks")
var urduMarks = document.querySelector("#urdumarks")
var computerMarks = document.querySelector("#compmarks")
var chemMarks = document.querySelector("#chemmarks")
var physMarks = document.querySelector("#physmarks")
var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var h3 = document.querySelector("#h3");

var studentsObtainedMarks = engMarks.value + urduMarks.value + computerMarks.value + chemMarks.value + physMarks.value;

var totalMarks = 500;


function result(){
    h1.innerHTML = "Student Obtained Marks is " + studentsObtainedMarks;
}