function defaultapplicationsinstall() {
  localStorage.WindowsU_ArcadeApplication = "Installed";
  localStorage.WindowsU_p5js_editorApplication = "Installed";
  localStorage.WindowsU_PokemonRedApplication = "Installed";
}
function loaddesktopapplication() {
  document.getElementById("SearchIcon").style.display = "block";
  if (localStorage.WindowsU_ArcadeApplication == "Installed") {
    document.getElementById("Arcade").style.display = "block";
  } else { document.getElementById("Arcade").style.display = "none"; }
  if (localStorage.WindowsU_p5js_editorApplication == "Installed") {
    document.getElementById("p5js_editor").style.display = "block";
  } else { document.getElementById("p5js_editor").style.display = "none"; }
  if (localStorage.WindowsU_PokemonRedApplication == "Installed") {
    document.getElementById("PokemonRed").style.display = "block";
  } else { document.getElementById("PokemonRed").style.display = "none"; }
  if (localStorage.WindowsU_Dog12312RainbowColorFunApplication == "Installed") {
    document.getElementById("Dog12312RainbowColorFun").style.display = "block";
  } else { document.getElementById("Dog12312RainbowColorFun").style.display = "none"; }
  if (localStorage.CalebTowerDefenseApplication == "Installed") {
    document.getElementById("CalebTowerDefense").style.display = "block";
  } else { document.getElementById("CalebTowerDefense").style.display = "none"; }
}
