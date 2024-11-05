import "./App.css";
import Navbar from "./components/Navbar";
import SearchResult from "./components/SearchResult";
import CharacterInfo from "./components/CharacterInfo";
import CharacterEpisodes from "./components/CharacterEpisodes";
import { Children, useEffect, useState } from "react";
// import { allCharacters } from "./components/data";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./components/Modal";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`,
          { signal }
        );
        setCharacters(data.results);
      } catch (error) {
        if (!axios.isCancel()) {toast.error(error.response.data.error);
        setCharacters([]);}
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [query]);
  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };
  const handleFavorite = (item) => {
    setFavorites((prev) => [...prev, item]);
  };
  const isAddedToFav = favorites.map((f) => f.id).includes(selectedId);
  return (
    <div className="app">
      <Toaster />
      <Modal title="favorite characters" open={true} >hcmdkd;lci</Modal>
      <Navbar
        characters={characters}
        query={query}
        setQuery={setQuery}
        favorites={favorites}
      />
      <div className="main">
        <SearchResult
          characters={characters}
          isLoading={isLoading}
          onSelectCharacter={handleSelectCharacter}
          selectedId={selectedId}
        />
        <CharacterInfo
          selectedId={selectedId}
          onAddFavorite={handleFavorite}
          isAddedToFav={isAddedToFav}
        />
        <CharacterEpisodes selectedId={selectedId} />
      </div>
    </div>
  );
}

export default App;
