import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Registration from "./routes/Registration";
import Success from "./routes/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="register" element={<Registration />}/>
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
