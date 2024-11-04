/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { character } from "./data";
import Loader from "./Loader";
function CharacterInfo({ selectedId, onAddFavorite, isAddedToFav }) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        const character = res.data;
        setCharacter(character);
      } catch (error) {
        toast.error(error.response.data.error);
        // console.log(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedId) fetchData();
  }, [selectedId]);
  if (isLoading)
    return (
      <div className="character_info">
        <Loader />
      </div>
    );
  if (!character || !selectedId)
    return (
      <div className="character_info" style={{ color: "#fff" }}>
        please select a character
      </div>
    );
  return (
    <div className="character_info">
      <Toaster position="bottom-center" reverseOrder={false} />
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
        {isAddedToFav ? (
          <p>is added to favorites</p>
        ) : (
          <button onClick={() => onAddFavorite(character)}>
            Add to favorite
          </button>
        )}
      </span>
    </div>
  );
}
export default CharacterInfo;
