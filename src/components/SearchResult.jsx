/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
// import PropTypes from "prop-types";
import Loader from "./Loader";
// import { allCharacters } from "./data";
function SearchResult({
  characters,
  isLoading,
  selectedId,
  onSelectCharacter,
}) {
  return (
    <div className="search_result">
      {isLoading ? (
        <Loader />
      ) : (
        characters.map((character) => {
          return (
            <CharacterItem key={character.id} character={character}>
              <span
                className="search_icon "
                onClick={() => onSelectCharacter(character.id)}
              >
                {selectedId === character.id ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </CharacterItem>
          );
        })
      )}
    </div>
  );
}
export default SearchResult;
export function CharacterItem({ character, children }) {
  return (
    <div className="search_item">
      <img
        src={character.image}
        alt={character.id}
        className="search_item-img"
      />
      <span className="search_item-detail">
        <p>
          {character.gender === "Male" ? "👨" : "👩"}
          {character.name}
        </p>
        <p>
          {character.status === "Dead" ? "🔴" : "🟢"} {character.species}-
          {character.status}
        </p>
      </span>
      {children}
    </div>
  );
}
