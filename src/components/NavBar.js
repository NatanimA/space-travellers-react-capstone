import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
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
