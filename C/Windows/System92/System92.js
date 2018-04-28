
function SystemRun() {
  Clock();
  loaddesktopapplication();
}
setInterval(SystemRun, 0);

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
function OpenStartMenu() {
    document.getElementById("StartMenu").style.display = "block";
}
function CloseStartMenu() {
    document.getElementById("StartMenu").style.display = "none";
}

if (localStorage.WindowsU_Color == null) {
  localStorage.WindowsU_Color = "#357EC7";
}

function Clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('TaskbarClock').innerHTML =
    h + ":" + m + ":" + s;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

var WindowsUAccountPassword = localStorage.getItem("WindowsUAccountPassword");
var PasswordEntered;
if(WindowsUAccountPassword == null) {
  WindowsUAccountPassword = "";
}
function CheckPassword() {
PasswordEntered = document.getElementById("PasswordInput").value;
if (WindowsUAccountPassword != "" || WindowsUAccountPassword != null) {
  if (PasswordEntered == WindowsUAccountPassword) {
    hideLoginScreen();
    showDesktop();
    loaddesktopapplication();
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
