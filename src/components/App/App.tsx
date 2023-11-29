import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import MyFurbysPage from "../../pages/MyFurbysPage/MyFurbysPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/my-furbys" />} />
        <Route path="my-furbys" element={<MyFurbysPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
