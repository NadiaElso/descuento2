let precio: number = document.getElementById("precio");
let cantidad: number = document.getElementById("cantidad");
let preciocondescuento: number = 0;
let Descuento: number = 0;
let preciototal: number = 0;

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (precio.value >= 1000) {
    console.log(precio.value - precio.value * 0.1);
  } else {
    console.log(precio.value);
  }
});
