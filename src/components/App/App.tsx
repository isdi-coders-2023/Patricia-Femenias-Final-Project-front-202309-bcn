import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import ToastStyled from "../Toast/ToastStyled";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import MyFurbysPage from "../../pages/MyFurbysPage/MyFurbysPage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CreatePage from "../../pages/CreatePage/CreatePage";
import DetailPage from "../../pages/DetailPage/DetailPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <AppStyled>
      {uiState.isLoading && <Loading />}
      <ToastStyled />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/my-furbys" />} />
        <Route path="/my-furbys" element={<MyFurbysPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/my-furbys/:furbyId" element={<DetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
