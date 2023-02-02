import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({handleClick}) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="cross">
          <FaTimes style={{ color: "white" }} size={25} onClick={handleClick}/>
        </div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
          temporibus vitae nihil eligendi itaque quam et architecto doloribus
          quos.
        </h2>
      </div>
    </div>
  );
};

export default Modal;
