// var menuicon =document.getElementById("menuicon")
// Menus.style.maxHeight = "0px";
// var men = document.getElementById("menu-icon");
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
