import Modal from "../components/Modal";
import Squares from "../components/Squares";
import "./App.css";

function Main() {
  return (
    <div className="container">
      <h1>Squares</h1>
      <Modal />
      <Squares />
    </div>
  );
}

export default Main;
