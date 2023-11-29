import { FurbyStructure } from "../../store/features/furbys/types";

interface FurbyCardProps {
  furby: FurbyStructure;
}

const FurbyCard = ({
  furby: { imageUrl, name, type, year, price },
}: FurbyCardProps): React.ReactElement => {
  return (
    <article>
      <img src={imageUrl} alt={name} width="300" height="300" />
      <h2>{name}</h2>
      <dl>
        <dt>Type</dt>
        <dd>{type}</dd>
        <dt>Year</dt>
        <dd>{year}</dd>
        <dt>Price</dt>
        <dd>{price}</dd>
      </dl>
    </article>
  );
};

export default FurbyCard;
