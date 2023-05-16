import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

const navItems = [
  { key: 'home',     link:'',         text: 'Home'}
, { key: 'specials', link:'specials', text: 'Menu'}
, { key: 'reviews',  link:'reviews',  text: 'Reviews'}
, { key: 'about',    link:'about',    text: 'About'}
, { key: 'booking',  link:'booking',  text: 'Reservations'}
, { key: 'order',    link:'NULL',     text: 'Order Online'}
, { key: 'login',    link:'NULL',     text: 'Login'}
];

const Nav = (props) => {
  const [menuClass, setMenuClass] = useState(null);

  const handleLinkClick = (e, anchor) => {
    (menuClass) ? setMenuClass(null) : setMenuClass('open');

    if (anchor === 'NULL') {
      e.preventDefault();
      alert("Coming Soon!");
    }
  };

  const handleBurgerClick = (e) => {
    (menuClass) ? setMenuClass(null) : setMenuClass('open');
  };

  return (
    <nav {... props}>
      <FontAwesomeIcon id={props.id + '-burgernav'} icon={faBars} size='2xl' onClick={handleBurgerClick} />
      <ul className={menuClass}>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.key}>
              <Link
                to={'/' + navItem.link}
                onClick={(e) => handleLinkClick(e, navItem.link)}
              >
                {navItem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;