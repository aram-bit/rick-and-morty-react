/* eslint-disable react/prop-types */
import { HeartIcon } from "@heroicons/react/outline";
function Navbar({ characters,query,setQuery,favorites}) {
  return (
    <nav className="navbar">
      <span className="nav_logo">Logo ⭐</span>
      <input
      value={query}
        type="text"
        className="nav_input"
        placeholder="search..."
        onChange={(e)=>setQuery(e.target.value)}
      />
      <span className="nav_input-result">
        {characters.length}characters are found
      </span>
      <span className="nav_icon">
        <HeartIcon className="nav_icon-img" />
        <span className="nav_icon-item">{favorites.length} </span>
      </span>
    </nav>
  );
}
export default Navbar;
