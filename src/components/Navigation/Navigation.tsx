import { NavLink, useLocation } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  const currentLocation = useLocation();
  const myFurbysPagePath = "/my-furbys";
  const createPagePath = "/create";

  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink
            to="/my-furbys"
            className={
              currentLocation.pathname === myFurbysPagePath
                ? "active-navbar"
                : "non-active-navbar"
            }
          >
            My Furbys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={
              currentLocation.pathname === createPagePath
                ? "active-navbar"
                : "non-active-navbar"
            }
          >
            New one
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
