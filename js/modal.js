export const Modal = {
  Wrapper: document.querySelector(".modal-wrapper"),
  Menssage: document.querySelector(".modal .title span"),
  BtcClose: document.querySelector(".modal button.close"),

  open() {
    Modal.Wrapper.classList.add("open");
  },
  close() {
    Modal.Wrapper.classList.remove("open");
  },
};

Modal.BtcClose.onclick = () => {
  //modalWrapper.classList.remove("open");
  Modal.close();
};

window.addEventListener("keydown", handkeydown);

function handkeydown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
