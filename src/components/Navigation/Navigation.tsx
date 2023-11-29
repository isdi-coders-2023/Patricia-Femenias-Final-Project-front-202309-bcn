import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/my-furbys">My Furbys</NavLink>
        </li>
        <li>
          <NavLink to="/new-one">New one</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
