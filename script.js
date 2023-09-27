const form = document.querySelector("form");

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMenssage = document.querySelector(".modal .title span");
const modalBtcClose = document.querySelector(".modal button.close");

const modal = {
  open() {
    modalWrapper.classList.add("open");
  },
  close() {
    modalWrapper.classList.remove("open");
  },
};

// not-recharge = Nao recarregue a pagina
function notRecharge(event) {
  event.preventDefault();
}

form.onsubmit = () => {
  notRecharge(event);
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  let messege = `Seu imc e ${result}`;

  modalMenssage.innerText = messege;

  //modalWrapper.classList.add("open");
  modal.open();
};

modalBtcClose.onclick = () => {
  //modalWrapper.classList.remove("open");
  modal.close();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}


//animation inputs 

