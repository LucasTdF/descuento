document.getElementById("app").innerHTML = ` <h1>Ingreso de datos</h1>
  <p id="rotulo">Dato</p>
  <input type="text" id="dato" />
  <button id="btnEnviar">Enviar</button>
`;

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", dato.value);
  //}
});
