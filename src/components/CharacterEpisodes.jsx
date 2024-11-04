/* eslint-disable react/prop-types */
// import { episodes } from "./data";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import axios from "axios";
function CharacterEpisodes({ selectedId }) {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        const episodeId = data.episode.map((e) => e.split("/").at(-1));
        // console.log(episodeId);
        const res = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );
        console.log(res.data);
        setEpisodes([res.data].flat());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [selectedId]);
  return (
    <div className="character_episodes">
      <span className="character_episodes-header">
        <h3>List of episodes:</h3>
        <ChevronDownIcon className="icon" />
      </span>
      <span className="character_episodes-list">
        {episodes.map((item, index) => {
          return (
            <div key={item.id} className="character_episode-detail">
              <li className="episode_name">
                {String(index + 1).padStart(2, 0)}-{item.episode}:{item.name}
              </li>
              <li className="episode_date">
                {new Date(item.air_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </li>
            </div>
          );
        })}
      </span>
    </div>
  );
}
export default CharacterEpisodes;
