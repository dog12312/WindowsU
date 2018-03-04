var WindowUAccountPassword = localStorage.getItem("WindowUAccountPassword");

function loopwinu() {
  if (WindowUAccountPassword == null) {
    WindowUAccountPassword = "";
  }
  if (Screen == "WindowsUSettings") {
    fill(500);
    textSize(34);
    text('Password',440,100);
    textSize(20);
    text('- press P to change',600,100);
    text(WindowUAccountPassword,450,125);
  }
}
