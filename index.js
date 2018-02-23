var Name = localStorage.getItem("Name");
document.getElementById('AccountName').innerHTML = Name;

function showBootScreen() {
    document.getElementById("BootScreen").style.display = "block";
}
function closeBootScreen() {
    document.getElementById("BootScreen").style.display = "none";
}
