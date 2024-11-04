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
  const [isLoading, setIsLoading] = useState(false);
  const [query,setQuery]=useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results);
      } catch (error) {
        toast.error(error.response.data.error);
        setCharacters([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);
  return (
    <div className="app">
      <Toaster />
      <Navbar characters={characters} query={query} setQuery={setQuery}/>
      <div className="main">
        <SearchResult characters={characters} isLoading={isLoading} />
        <CharacterInfo />
        <CharacterEpisodes />
      </div>
    </div>
  );
}

export default App;
