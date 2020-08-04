// function myFunction_Click() {
//     document.getElementById("doraemon").innerHTML = "Chưa có truyện nhea";
//     document.getElementById("doraemon").style.background = "red";
// }

// function quay_lai_trang_truoc() {
//     history.back();
// }

function OpenSignInForm() {
    document.getElementById("SignIn").style.display = "block"; 
    document.querySelector("nav").style.filter = "brightness(60%)"; 
    document.getElementById("cover").style.filter = "brightness(60%)"; 
    document.getElementById("category").style.filter = "brightness(60%)"; 
    document.querySelector("main").style.filter = "brightness(60%)"; 
    document.querySelector("div.sidebar").style.filter = "brightness(60%)"; 
    document.querySelector("footer").style.filter = "brightness(60%)"; 
}

function CloseSignInForm() {
    document.getElementById("SignIn").style.display = "none"; 
    document.querySelector("nav").style.filter = "brightness(100%)"; 
    document.getElementById("cover").style.filter = "brightness(100%)"; 
    document.getElementById("category").style.filter = "brightness(100%)"; 
    document.querySelector("main").style.filter = "brightness(100%)"; 
    document.querySelector("div.sidebar").style.filter = "brightness(100%)"; 
    document.querySelector("footer").style.filter = "brightness(100%)";  
}

function OpenSignUpForm() {
    document.getElementById("SignUp").style.display = "block"; 
    document.querySelector("nav").style.filter = "brightness(60%)"; 
    document.getElementById("cover").style.filter = "brightness(60%)"; 
    document.getElementById("category").style.filter = "brightness(60%)"; 
    document.querySelector("main").style.filter = "brightness(60%)"; 
    document.querySelector("div.sidebar").style.filter = "brightness(60%)"; 
    document.querySelector("footer").style.filter = "brightness(60%)"; 
}

function CloseSignUpForm() {
    document.getElementById("SignUp").style.display = "none"; 
    document.querySelector("nav").style.filter = "brightness(100%)"; 
    document.getElementById("cover").style.filter = "brightness(100%)"; 
    document.getElementById("category").style.filter = "brightness(100%)"; 
    document.querySelector("main").style.filter = "brightness(100%)"; 
    document.querySelector("div.sidebar").style.filter = "brightness(100%)"; 
    document.querySelector("footer").style.filter = "brightness(100%)";  
}