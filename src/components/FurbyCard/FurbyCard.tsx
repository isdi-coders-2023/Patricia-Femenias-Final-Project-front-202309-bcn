import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import useFurbysApi from "../../hooks/useFurbysApi.tsx";
import {
  deleteFurbyActionCreator,
  loadSelectedFurbyActionCreator,
} from "../../store/features/furbys/furbysSlice";
import { FurbyStructure } from "../../store/features/furbys/types";
import Button from "../Button/Button";
import FurbyCardStyled from "./FurbyCardStyled";

interface FurbyCardProps {
  furby: FurbyStructure;
}

const FurbyCard = ({
  furby: { imageUrl, name, type, year, generation, _id },
}: FurbyCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { deleteFurby, loadSelectedFurby } = useFurbysApi();

  const deleteFurbyApi = async (): Promise<void> => {
    await deleteFurby(_id);

    dispatch(deleteFurbyActionCreator(_id));
  };

  const modifyCurrentFurby = async () => {
    const selectedFurby = await loadSelectedFurby(_id);

    dispatch(loadSelectedFurbyActionCreator(selectedFurby!));

    navigate(`/my-furbys/${_id}/modify`);
  };

  return (
    <FurbyCardStyled>
      <Link to={`/my-furbys/${_id}`}>
        <img
          className="furby-card__image"
          src={imageUrl}
          alt={name}
          width="300"
          height="300"
        />
      </Link>
      <div className="furby-card__name-container">
        <span>♥</span>
        <h2 className="furby-card__name">{name}</h2>
        <span>♥</span>
      </div>
      <dl className="furby-card__info-container">
        <div className="furby-card__details">
          <dt className="furby-card__title-info">Type:</dt>
          <dd className="furby-card__info">{type}</dd>
        </div>
        <div className="furby-card__details">
          <dt className="furby-card__title-info">Year:</dt>
          <dd className="furby-card__info">{year}</dd>
        </div>
        <div className="furby-card__details">
          <dt className="furby-card__title-info">Generation:</dt>
          <dd className="furby-card__info">{generation}</dd>
        </div>
      </dl>
      <div className="furby-card__button-container">
        <Button actionOnClick={modifyCurrentFurby} text="Modify" />
        <Button actionOnClick={deleteFurbyApi} text="Delete" />
      </div>
    </FurbyCardStyled>
  );
};

export default FurbyCard;
