import useFurbysApi from "../../hooks/useFurbysApi";
import { deleteFurbyActionCreator } from "../../store/features/furbys/furbysSlice";
import { FurbyStructure } from "../../store/features/furbys/types";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import FurbyCardStyled from "./FurbyCardStyled";
import { NavLink } from "react-router-dom";

interface FurbyCardProps {
  furby: FurbyStructure;
}

const FurbyCard = ({
  furby: { imageUrl, name, type, year, price, _id },
}: FurbyCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteFurby } = useFurbysApi();

  const deleteFurbyApi = (): void => {
    deleteFurby(_id);
    dispatch(deleteFurbyActionCreator(_id));
  };

  return (
    <FurbyCardStyled>
      <NavLink to={`/my-furbys/${_id}`}>
        <img
          className="furby-card__image"
          src={imageUrl}
          alt={name}
          width="300"
          height="300"
        />
      </NavLink>
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
          <dt className="furby-card__title-info">Price:</dt>
          <dd className="furby-card__info">{price}</dd>
        </div>
      </dl>
      <div className="furby-card__button-container">
        <Button text="Modify" />
        <Button actionOnClick={deleteFurbyApi} text="Delete" />
      </div>
    </FurbyCardStyled>
  );
};

export default FurbyCard;
