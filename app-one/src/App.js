import Topbar from "./components/Global/Topbar";
import Newspaper from "./components/NewsPaper/Newspaper";
import UserPage from "./components/User/UserPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my_task" element={<UserPage />} />
          <Route path="/newspaper" element={<Newspaper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
