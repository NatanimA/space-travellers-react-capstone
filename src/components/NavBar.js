import { NavLink } from 'react-router-dom';
import logo from '../brand.png';

const NavBar = () => (
  <header>
    <img className="brand-logo" src={logo} alt="Brand" />
    <nav>
      <ul>
        <NavLink to="/"> Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/profile">My profile</NavLink>
      </ul>
    </nav>
  </header>
);

export default NavBar;
