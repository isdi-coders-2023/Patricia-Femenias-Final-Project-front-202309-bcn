import { useAppSelector } from "../../store/hooks";
import FurbysListStyled from "./FurbysListStyled";

const FurbysList = (): React.ReactElement => {
  const furbysState = useAppSelector((state) => state.furbysState);

  return (
    <FurbysListStyled>
      {furbysState.furbys.map((furby) => (
        <li key={furby._id}>{furby.name}</li>
      ))}
    </FurbysListStyled>
  );
};

export default FurbysList;
