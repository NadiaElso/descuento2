let precio: number = document.getElementById("precio");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (precio.value >= 1000) {
    console.log(precio.value - precio.value * 0.1);
  } else {
    console.log(precio.value);
  }
});
