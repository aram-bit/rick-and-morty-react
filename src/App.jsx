import "./App.css";
import Navbar from "./components/Navbar";
import SearchResult from "./components/SearchResult";
import CharacterInfo from "./components/CharacterInfo";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <SearchResult />
        <CharacterInfo />
      </div>
    </div>
  );
}

export default App;
