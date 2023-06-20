import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { TwitterContextProvider } from "./context/TwitterContext";

function App() {
  return (
    <div className="app">
      <TwitterContextProvider>
        <Sidebar />
        <Feed />
      </TwitterContextProvider>
    </div>
  );
}

export default App;
