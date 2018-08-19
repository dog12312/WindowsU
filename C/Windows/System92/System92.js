function Start() {
  setInterval(SystemRun, 0);
}

function SystemRun() {
  Clock();
  loaddesktopapplication();
}

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
    clippy.load('Rover', function(agent) {
        // Do anything with the loaded agent
        agent.show();
    });
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
    var d = new Date();
    document.getElementById("TaskbarClock").innerHTML = d.toLocaleTimeString();
    /*var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('TaskbarClock').innerHTML = h + ":" + m + ":" + s;*/
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
}
  else
  { hideLoginScreen();showDesktop(); }
}

var Window;
function OpenWindow(url) {
  document.getElementById("Window").style.display = "block";
  Window = document.getElementById("WindowContent");
  Window.src = url;
  agent.Play('Thinking');
}
function CloseWindow() {
  Window = document.getElementById("WindowContent");
  Window.src = "";
  document.getElementById("Window").style.display = "none";
}


var ErrorSound = new Audio('https://dogindustrialstudios.github.io/Arcade/Server/ErrorSound.mp3');

window.addEventListener("error", handleError, true);

/*function handleError(evt) {
  ErrorSound.play();
  if (localStorage.debug == "1") {
    if (evt.message) { // Chrome sometimes provides this
      alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
    } else {
      alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
    }
  }
}*/

function handleError(evt) {
  ErrorSound.play();
  var ErrorWindow = window.open("", "ErrorWindow", "width=600,height=200");
  ErrorWindow.document.write("<title>Error</title>");
    if (evt.message) { // Chrome sometimes provides this
      ErrorWindow.document.write("<p>"+"error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename+"</p>");
    } else {
      ErrorWindow.document.write("<p>"+"error: "+evt.type+" from element: "+(evt.srcElement || evt.target)+"</p>");
    }
}
