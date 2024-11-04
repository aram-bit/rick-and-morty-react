import { character } from "./data";
function CharacterInfo() {
  return (
    <div className="character_info">
      <span className="character_img">
        <img src={character.image} alt="" />
      </span>
      <span className="character_detail">
        <h3>
          {character.gender === "Male" ? "👨" : "👩"}
          {character.name}
        </h3>
        <p>
          {character.status === "Dead" ? "🔴" : "🟢"} {character.species}-
          {character.status}
        </p>
        <p className="location">last known location:</p>
        <p>{character.location.name}</p>
        <button>Add to favorite</button>
      </span>
    </div>
  );
}
export default CharacterInfo;
