import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Hop on your Mat</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              // exact
              // to="/"
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/poses"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Poses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
