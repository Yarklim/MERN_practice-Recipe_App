import { NavLink, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const NavBar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);

  const navigate = useNavigate();

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    navigate('/auth');
  };
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create-recipe">Create Recipe</NavLink>
      <NavLink to="/favorites">Saved Recipe</NavLink>
      {!cookies ? (
        <NavLink to="/auth">Login / Register</NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default NavBar;
