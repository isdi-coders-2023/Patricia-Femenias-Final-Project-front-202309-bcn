import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="My 90s Furby collection logo"
        width="300"
        height="300"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
