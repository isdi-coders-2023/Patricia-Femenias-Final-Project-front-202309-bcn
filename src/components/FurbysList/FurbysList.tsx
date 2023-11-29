import { useAppSelector } from "../../store/hooks";

const FurbysList = (): React.ReactElement => {
  const furbysState = useAppSelector((state) => state.furbysState);

  return (
    <ul>
      {furbysState.furbys.map((furby) => (
        <li key={furby._id}>{furby.name}</li>
      ))}
    </ul>
  );
};

export default FurbysList;
