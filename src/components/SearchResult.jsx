import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import Loader from "./Loader";
// import { allCharacters } from "./data";
function SearchResult({
  characters,
  isLoading,
  onSelectCharacter,
  selectedId,
}) {
  return (
    <div className="search_result">
      {isLoading ? (
        <Loader />
      ) : (
        characters.map((character) => {
          return (
            <div className="search_item" key={character.id}>
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
                  {character.status === "Dead" ? "🔴" : "🟢"}{" "}
                  {character.species}-{character.status}
                </p>
              </span>
              <span
                className="search_icon"
                onClick={() => onSelectCharacter(character.id)}
              >
                {selectedId === character.id ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}
export default SearchResult;
