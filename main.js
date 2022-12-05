let savedUsuario = "Mariana";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu Usuario Tenés " + (i + 1) + " intentos");

    if (userPIN === savedUsuario) {
      alert("Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error. Te quedan " + i + " intentos");
    }
  }
  return ingresar;
}

//console.log(login());
let exito = login();
//console.log(exito);
//Estoy dentro del sistema de stock de la empresa
if (exito) {
  //Ingresamos a la informacion del stock de un articulo determinado en este caso Libro 1
  let stock= 1240;

  let opcion = prompt(
    "Operacion de movimiento de stock del libro 1: \n1- stock \n2 - Venta \n3 - Devolucion \nPresioná X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Stock en unidades del libro 1 " + stock);
        break;
      case "2":
        let venta = parseInt(prompt("Ingresa cantidad en unidades de venta del libro 1"));

        if (venta <= stock) {
          stock = stock - venta;
          alert("Vendiste" + venta + " Tu nuevo stock en unidades del lirbo 1 es " + stock);
        } else {
          alert("Articulo sin stock");
        }
        break;
      case "3":
        let Devolucion = parseInt(prompt("Ingresa cantidad en unidades a devolver del lirbo 1 "));

        stock = stock + Devolucion;
        alert("Tu nuevo stock en unidades del libro 1 es " + stock);

        break;

      default:
        alert("opcion no valida");
        break;
    }

    //condicion de salida del while
    opcion = prompt(
      "Operacion de movimiento de stock del libro 1: \n1- stock \n2 - Venta \n3 - Devolucion \nPresioná X para finalizar."
  );
  }
} else {
  alert("Comunicate con departamento de compras");
}
alert("Tu operacion ha sido exitosa");