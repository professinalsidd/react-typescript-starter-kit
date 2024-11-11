import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./container/screens/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
