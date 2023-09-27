import { AlertError } from "./alert-error.js";
import { Modal } from "./modal.js";

const form = document.querySelector("form");

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// not-recharge = Nao recarregue a pagina
function notRecharge(event) {
  event.preventDefault();
}

form.onsubmit = (event) => {
  notRecharge(event);
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const result = IMC(weight, height);
  let messege = `Seu imc e ${result}`;

  Modal.Menssage.innerText = messege;

  //modalWrapper.classList.add("open");
  Modal.open();
};

function notNumber(value) {
  return isNaN(value) || value == ("", ",", ".");
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

//animation inputs
