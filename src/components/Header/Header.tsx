import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="My 90s Furby collection logo"
        width="350"
        height="350"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
