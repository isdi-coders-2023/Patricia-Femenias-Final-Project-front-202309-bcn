import { useAppSelector } from "../../store/hooks";
import FurbyCard from "../FurbyCard/FurbyCard";
import FurbysListStyled from "./FurbysListStyled";

const FurbysList = (): React.ReactElement => {
  const furbysState = useAppSelector((state) => state.furbysState);

  return (
    <FurbysListStyled>
      {furbysState.furbys.map((furby) => (
        <li key={furby._id}>
          <FurbyCard furby={furby} />
        </li>
      ))}
    </FurbysListStyled>
  );
};

export default FurbysList;
