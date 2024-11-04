/* eslint-disable react/prop-types */
// import { episodes } from "./data";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function CharacterEpisodes({ selectedId }) {
  const [episodes, setEpisodes] = useState([]);
  const [sortBy,setSortBy]=useState(true)
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
        // console.log(res.data);
        setEpisodes([res.data].flat());
      } catch (error) {
        // console.log(error);
        toast.error(error.response.data.error);
      }
    }
    if (selectedId) fetchData();
  }, [selectedId]);
  let sortedEpisodes;
  if(sortBy){
    sortedEpisodes=[...episodes].sort((a,b)=>new Date(a.created)-new Date(b.created));
  }
  else{
    sortedEpisodes=[...episodes].sort((a,b)=>new Date(b.created)-new Date(a.created));
  }
  return (
    <div className="character_episodes">
      <Toaster />
      <span className="character_episodes-header">
        <h3>List of episodes:</h3>
        <ChevronDownIcon className="icon" onClick={()=>setSortBy(is=>!is)} style={{rotate:(sortBy)?"0deg":"180deg"}}/>
      </span>
      <span className="character_episodes-list">
        {sortedEpisodes.map((item, index) => {
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
