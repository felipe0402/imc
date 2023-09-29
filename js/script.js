import { AlertError } from "./alert-error.js";
import { Modal } from "./modal.js";
import { IMC, notNumber } from "./utils.js";

const form = document.querySelector("form");

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const input = document.querySelectorAll(".input");

function eventInput() {
  input.AlertError.eventInput("click");
}

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

  inputWeight.oninput = () => AlertError.close();
  inputHeight.oninput = () => AlertError.close();

  //modalWrapper.classList.add("open");
  Modal.open();
};

//animation inputs
