import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/my-furbys" />} />
          <Route path="my-furbys" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
