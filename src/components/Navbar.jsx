/* eslint-disable react/prop-types */
import { HeartIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Modal from "./Modal";
import { CharacterItem } from "./SearchResult";
function Navbar({ characters, query, setQuery, favorites,onDeleteFavorite }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal title="favorite characters" open={isOpen} onOpen={setIsOpen}>
        {favorites.map(character=>(
          <CharacterItem character={character} key={character.id}>
            <TrashIcon style={{width:"1.5rem",color:"red",cursor:"pointer"}} onClick={()=>onDeleteFavorite(character.id)}/>
             </CharacterItem >
        ))}
      </Modal>
      <nav className="navbar">
        <span className="nav_logo">Logo ⭐</span>
        <input
          value={query}
          type="text"
          className="nav_input"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="nav_input-result">
          {characters.length}characters are found
        </span>
        <span className="nav_icon" onClick={() => setIsOpen((is) => !is)}>
          <HeartIcon className="nav_icon-img" />
          <span className="nav_icon-item">{favorites.length} </span>
        </span>
      </nav>
    </>
  );
}
export default Navbar;
