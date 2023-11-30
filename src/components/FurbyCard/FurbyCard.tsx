import { FurbyStructure } from "../../store/features/furbys/types";
import Button from "../Button/Button";
import FurbyCardStyled from "./FurbyCardStyled";

interface FurbyCardProps {
  furby: FurbyStructure;
}

const FurbyCard = ({
  furby: { imageUrl, name, type, year, price },
}: FurbyCardProps): React.ReactElement => {
  return (
    <FurbyCardStyled>
      <img
        className="furby-card__image"
        src={imageUrl}
        alt={name}
        width="300"
        height="300"
      />
      <div className="furby-card">
        <h2 className="furby-card__name">{name}</h2>
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
          <Button text={"Modify"} />
          <Button text={"Delete"} />
        </div>
      </div>
    </FurbyCardStyled>
  );
};

export default FurbyCard;
