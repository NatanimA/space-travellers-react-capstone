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
        <NavLink to="/"> Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <div className='nav-cutter'>|</div>
        <NavLink to="/profile">My profile</NavLink>
      </ul>
    </nav>
  </header>
);

export default NavBar;
