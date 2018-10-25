function Start() {
  setInterval(SystemRun, 0);
}

function SystemRun() {
  Clock();
  loaddesktopapplication();
  ShowHideLoginInput();
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
  if (localStorage.WindowsU_DesktopPet == null) {
    localStorage.WindowsU_DesktopPet = "Clippy";
  }
    if (localStorage.WindowsU_DesktopPetEnabled == 1) {
      clippy.load(localStorage.WindowsU_DesktopPet, function(agent) {
        // Do anything with the loaded agent
        agent.show();
        if (localStorage.WindowsU_DesktopPet == "Clippy") {
          agent.play('GetAttention');
          agent.speak('When all else fails, bind some paper together. My name is Clippy.');
          setInterval(function(){ agent.animate(); }, 30000);
          var ClippyText = ["Howdy.","You like Jazz.","Did you know 100% of all deaths are caused by death."];
          setInterval(function(){agent.speak(ClippyText[Math.floor(Math.random() * 3)]); }, 120000);
        }
        if (localStorage.WindowsU_DesktopPet == "Rover") {
          agent.play('GetAttention');
          agent.speak('Throw me a bone.');
          setInterval(function(){ agent.animate(); }, 30000);
          //var ClippyText = ["Howdy.","You like Jazz.","Did you know 100% of all deaths are caused by death."];
          //setInterval(function(){agent.speak(ClippyText[Math.floor(Math.random() * 3)]); }, 120000);
        }
      });
    }
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
function ShowHideLoginInput() {
  if (WindowsUAccountPassword != null || WindowsUAccountPassword != "") {
        document.getElementById("PasswordInput").style.display = "block";
    console.log("on");
  } else {
        document.getElementById("PasswordInput").style.display = "none";
    Console.log("off");
  }
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
  /*clippy.load('Rover', function(agent) {
      clippy.play('Searching');
  });*/
  document.getElementById("Window").style.display = "block";
  Window = document.getElementById("WindowContent");
  Window.src = url;
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
  ErrorWindow.document.write("<link rel='shortcut icon' href='https://dogindustrialstudios.github.io/WindowsU/C/Windows/System92/icons/Close.ico' type='image/x-icon'>");
    if (evt.message) { // Chrome sometimes provides this
      ErrorWindow.document.write("<p>"+"error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename+"</p>");
    } else {
      ErrorWindow.document.write("<p>"+"error: "+evt.type+" from element: "+(evt.srcElement || evt.target)+"</p>");
    }
}
