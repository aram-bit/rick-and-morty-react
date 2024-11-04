import { HeartIcon } from "@heroicons/react/outline";
function Navbar( {characters}) {
  return (
    <nav className="navbar">
      <span className="nav_logo">Logo ⭐</span>
      <input type="text" className="nav_input" placeholder="search..." />
      <span className="nav_input-result">{characters.length}characters are found</span>
      <span className="nav_icon">
        <HeartIcon className="nav_icon-img" />
        <span className="nav_icon-item">3 </span>
      </span>
    </nav>
  );
}
export default Navbar;
