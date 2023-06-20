import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {


const [isOpen, setIslOpen] = useState(true) 

  const onCloseModal =()=>{

console.log ("cerrando modal"); 
setIslOpen (false);

  }


  return (
    <Modal
      isOpen ={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className={"modal"}
      overlayClassName={"modal-fondo"}
      closeTimeoutMS={200}
>
  <h1>hola mundo</h1>
<hr/>
<p>Lorem ipsum dolor sit amet…” se atribuye a una remixac </p>
    </Modal>
  );
};