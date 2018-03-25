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

var WindowUAccountPassword = "KKK";
var PasswordEntered;
if(WindowUAccountPassword == null) {
  WindowUAccountPassword = "";
}
function CheckPassword() {
PasswordEntered = document.getElementById("PasswordInput").value;
if (WindowUAccountPassword != "" || WindowUAccountPassword != null) {
  if (PasswordEntered == WindowUAccountPassword) {
    hideLoginScreen();
    showDesktop();
  } else {alert('Wrong Password. ' + PasswordEntered + ' is not right.');}
} else { hideLoginScreen();showDesktop(); }
}

var Window;
function OpenWindow(url) {
  document.getElementById("Window").style.display = "block";
  Window = document.getElementById("WindowContent");
  Window.src = url;
}
function CloseWindow() {
  Window = document.getElementById("WindowContent");
  Window.src = "";
  document.getElementById("Window").style.display = "none";
}
