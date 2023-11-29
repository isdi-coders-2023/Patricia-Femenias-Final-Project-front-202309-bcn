import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/my-furbys">My Furbys</NavLink>
        </li>
        <li>
          <NavLink to="/new-one">New one</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
