import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Doc from "./page/Doc";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc/*" element={<Doc />} />
      </Routes>
    </div>
  );
}

export default App;
