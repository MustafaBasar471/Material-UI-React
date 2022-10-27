import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import UserPage from "./components/UserPage";

function App() {
  const [value, setValue] = useState();
  return (
    <div className="App">
      <Navbar value={value} setValue={setValue} />
      {/* Router Gelecek */}
      <Dashboard />
      <UserPage />
    </div>
  );
}

export default App;
