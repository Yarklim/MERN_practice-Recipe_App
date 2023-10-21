import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create-recipe">Create Recipe</NavLink>
      <NavLink to="/favorites">Saved Recipe</NavLink>
      <NavLink to="/auth">Login / Register</NavLink>
    </div>
  );
};

export default NavBar;
