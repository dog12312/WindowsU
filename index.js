var Name = localStorage.getItem("Name");

setTimeout(function() { closeBootScreen();showLoginScreen(); },3000);

function showBootScreen() {
    document.getElementById("BootScreen").style.display = "block";
}
function closeBootScreen() {
    document.getElementById("BootScreen").style.display = "none";
}
function showLoginScreen() {
    document.getElementById("Login").style.display = "block";
    document.getElementById('AccountName').innerHTML = Name();
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
