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



function result(){
    
var username = document.querySelector("#username");
var rollNumber = document.querySelector("#rollno");
var engMarks = document.querySelector("#engmarks");
var urduMarks = document.querySelector("#urdumarks");
var computerMarks = document.querySelector("#compmarks");
var chemMarks = document.querySelector("#chemmarks");
var physMarks = document.querySelector("#physmarks");
var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var h3 = document.querySelector("#h3");
var totalMarks = 500;
var studentsObtainedMarks = Number(engMarks.value) +
                            Number(urduMarks.value) + 
                            Number(computerMarks.value) + 
                            Number(chemMarks.value) + 
                            Number(physMarks.value); 



var Percentage = (studentsObtainedMarks / totalMarks) * 100;

    h1.innerHTML = "Student Obtained Marks is " + studentsObtainedMarks + "/500";
    h2.innerHTML = "Percentage " + Percentage + "%";
    if(Percentage >= 90) h3.innerHTML = "Grade A";
    else if(Percentage >= 80) h3.innerHTML = "Grade A";
    else if(Percentage >= 70) h3.innerHTML = "Grade B";
    else if(Percentage >= 60) h3.innerHTML = "Grade C";
    else if(Percentage >= 50) h3.innerHTML = "Grade D";
    else  h3.innerHTML = "Fail";
    
   
}