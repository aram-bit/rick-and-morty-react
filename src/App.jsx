import "./App.css";
import Navbar from "./components/Navbar";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <SearchResult />
      </div>
    </div>
  );
}

export default App;
