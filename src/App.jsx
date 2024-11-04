import "./App.css";
import Navbar from "./components/Navbar";
import SearchResult from "./components/SearchResult";
import CharacterInfo from "./components/CharacterInfo";
import CharacterEpisodes from "./components/CharacterEpisodes";
import { useEffect, useState } from "react";
// import { allCharacters } from "./components/data";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/characters"
        );
        setCharacters(data.results);
      } catch (error) {
        console.log(error.response.data.error);
        toast.error(error.response.data.error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <Toaster />
      <Navbar characters={characters} />
      <div className="main">
        <SearchResult characters={characters} />
        <CharacterInfo />
        <CharacterEpisodes />
      </div>
    </div>
  );
}

export default App;
