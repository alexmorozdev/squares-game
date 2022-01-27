function Result() {
  const rounds = sessionStorage.getItem("rounds");
  const rightClicks = sessionStorage.getItem("rightClicks");

  const buttonHandler = () => {
    window.location.href = "/";
  };

  return (
    <div className="result">
      <div>Rounds: {rounds}</div>
      <div>
        Right clicks: {rightClicks} ({Math.round((rightClicks / rounds) * 100)}
        %)
      </div>
      <button onClick={buttonHandler}>Restart game</button>
    </div>
  );
}

export default Result;
