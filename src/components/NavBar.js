import { NavLink } from 'react-router-dom';
import logo from '../brand.png';

const NavBar = () => (
  <header>
    <div>
      <img className="brand-logo" src={logo} alt="Brand" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/"> Rockets</NavLink>
        </li>

        <li className="nav-cutter">
          <NavLink to="/missions">Missions</NavLink>
        </li>

        <li>
          <NavLink className="my-profile" to="/profile">My profile</NavLink>
        </li>

      </ul>
    </nav>
  </header>
);

export default NavBar;
