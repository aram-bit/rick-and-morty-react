import { EyeIcon } from "@heroicons/react/outline";
import { allCharacters } from "./data";
function SearchResult() {
  return (
    <div className="search_result">
      {allCharacters.map((character) => {
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
                {character.status === "Dead" ? "🔴" : "🟢"} {character.species}-
                {character.status}
              </p>
            </span>
            <span className="search_icon">
              <EyeIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
}
export default SearchResult;
