import Topbar from "./components/Global/Topbar";
import Newspaper from "./components/Dashboard/Newspaper";
import UserPage from "./components/User/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/newspaper" element={<Newspaper />} />
          <Route path="/my_task" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
