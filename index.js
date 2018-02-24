setTimeout(function() { hideBootScreen();showLoginScreen(); },3000);

function showBootScreen() {
    document.getElementById("BootScreen").style.display = "block";
}
function hideBootScreen() {
    document.getElementById("BootScreen").style.display = "none";
}
function showLoginScreen() {
    document.getElementById("Login").style.display = "block";
}
function hideLoginScreen() {
    document.getElementById("Login").style.display = "none";
}
function showDesktop() {
    document.getElementById("Desktop").style.display = "block";
}
function hideDesktop() {
    document.getElementById("Desktop").style.display = "none";
}

var WindowUAccountPassword = localStorage.getItem("WindowUAccountPassword");
var PasswordEntered;

function CheckPassword() {
PasswordEntered = document.getElementById("PasswordInput").value;
if (WindowUAccountPassword != "" || WindowUAccountPassword != null) {
  if (PasswordEntered == WindowUAccountPassword) {
    hideLoginScreen();
    showDesktop();
  } else {alert('Wrong Password. ' + PasswordEntered + ' is not right.');}
} else { hideLoginScreen();showDesktop(); }
}
