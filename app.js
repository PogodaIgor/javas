let licznik = 0;

const licznikElement = document.getElementById("licznik");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

plusBtn.addEventListener("click", () => {
  licznik++;
  licznikElement.textContent = licznik;
});

minusBtn.addEventListener("click", () => {
  licznik--;
  licznikElement.textContent = licznik;
});
