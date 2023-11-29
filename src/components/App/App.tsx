import AppStyled from "./AppStyled";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main />
    </AppStyled>
  );
};

export default App;
