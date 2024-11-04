import { episodes } from "./data";
import {ChevronDownIcon} from "@heroicons/react/solid"
function CharacterEpisodes() {
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
