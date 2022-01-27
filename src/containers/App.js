import "./App.css";
import Result from "../components/Result";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
