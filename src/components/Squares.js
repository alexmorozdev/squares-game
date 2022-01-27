import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addColor, setRightClicks, setWrongClicks } from "../action";

function Squares() {
  const color = useSelector((state) => state.inputColor);
  const duration = useSelector((state) => state.inputData.duration);
  const rounds = useSelector((state) => state.inputData.rounds);
  const rightClicks = useSelector((state) => state.inputData.rightClicks);
  const allRounds = useSelector((state) => state.inputData.allRounds);
  const dispatch = useDispatch();

  function randomColor(arr) {
    let randIndex = Math.round(Math.random() * arr.length - 0.5);
    return arr[randIndex];
  }
  const colorsArr = ["blue", "red", "green"];
  const someColor = randomColor(colorsArr);

  let clickHandler = (event) => {
    const data = event.target.classList;
    if (rounds > 0) {
      if (data.contains(color.backgroundColor)) {
        dispatch(setRightClicks());
      } else {
        dispatch(setWrongClicks());
      }
    }
  };

  useEffect(() => {
    if (duration > 0 && rounds > 0) {
      dispatch(addColor(someColor));
    }
    if (duration > 0 && rounds === 0) {
      sessionStorage.setItem("rounds", allRounds);
      sessionStorage.setItem("rightClicks", rightClicks);
      window.location.href = "/result";
    }
  }, [rounds]);

  return (
    <div className="squares">
      <h2>One round duration (ms): {duration}</h2>
      <h2>Rounds: {rounds}</h2>
      <div className="row-up">
        <div className="square" style={color}>
          A
        </div>
      </div>
      <div className="row-down" onClick={clickHandler}>
        <div className="blue square">1</div>
        <div className="red square">2</div>
        <div className="green square">3</div>
      </div>
    </div>
  );
}

export default Squares;
