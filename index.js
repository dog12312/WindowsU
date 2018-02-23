var Name = localStorage.getItem("Name");
document.getElementById('AccountName').innerHTML = Name;

setTimeout(function() { closeBootScreen();showLoginScreen(); },3000);

function showBootScreen() {
    document.getElementById("BootScreen").style.display = "block";
}
function closeBootScreen();() {
    document.getElementById("BootScreen").style.display = "none";
}
function showLoginScreen() {
    document.getElementById("Login").style.display = "block";
}
function closeLoginScreen() {
    document.getElementById("Login").style.display = "none";
}
function showDesktop() {
    document.getElementById("Desktop").style.display = "block";
}
function closeDesktop() {
    document.getElementById("Desktop").style.display = "none";
}
