import Topbar from "./components/Global/Topbar";
import Dashboard from "./components/Dashboard/Dashboard";
import UserPage from "./components/User/UserPage";

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* Router Gelecek */}
      <Dashboard />
      <UserPage />
    </div>
  );
}

export default App;
