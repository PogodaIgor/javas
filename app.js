let licznik = 0;
function Dodac() {
  licznik = licznik + 1;
  document.getElementById("licznik").innerHTML = licznik;
  if (licznik < 0) {
    document.getElementById("licznik").style.color = "red";
  } else if (licznik > 0) {
    document.getElementById("licznik").style.color = "green";
  } else {
    document.getElementById("licznik").style.color = "black";
  }
  if (licznik == 67) {
    document.getElementById("liczknik").innerHTML = "SIX SEVEN!!!!!!";
  }
}
function Odjac() {
  licznik = licznik - 1;
  document.getElementById("licznik").innerHTML = licznik;
  if (licznik < 0) {
    document.getElementById("licznik").style.color = "red";
  } else if (licznik > 0) {
    document.getElementById("licznik").style.color = "green";
  } else {
    document.getElementById("licznik").style.color = "black";
  }
  if (licznik == 67) {
    document.getElementById("liczknik").innerHTML = "SIX SEVEN!!!!!!";
  }
}
