import React from "react";
import { useDispatch } from "react-redux";
import { addData } from "../action";

function Modal() {
  const modalStatus = React.createRef();
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    let data = event.target.elements;
    dispatch(addData(data.time.value, data.rounds.value));
    modalStatus.current.classList.toggle("active");
  };

  return (
    <div className="modal active" ref={modalStatus}>
      <form className="modal-content" onSubmit={formHandler}>
        <h2>Enter parameters</h2>
        <div>
          <label>Duration (ms): </label>
          <input type="number" name="time" />
        </div>
        <div>
          <label>Rounds: </label>
          <input type="number" name="rounds" />
        </div>
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default Modal;
