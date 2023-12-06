import Button from "../Button/Button";
import FurbyFormStyled from "./FurbyFormStyled";

const FurbyForm = (): React.ReactElement => {
  return (
    <FurbyFormStyled className="form" autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input className="form__input" type="text" id="name" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="type">
          Type:
        </label>
        <input className="form__input" type="text" id="type" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="year">
          Year:
        </label>
        <input className="form__input" type="number" id="year" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="generation">
          Generation:
        </label>
        <input className="form__input" type="text" id="generation" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="language">
          Language:
        </label>
        <input className="form__input" type="text" id="language" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="price">
          Price in €:
        </label>
        <input className="form__input" type="number" id="price" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="howFind">
          How did you find it?:
        </label>
        <textarea className="form__input" id="howFind" required />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture Url:
        </label>
        <input className="form__input" type="url" id="picture" required />
      </div>
      <Button className="button__form" text="Create" />
    </FurbyFormStyled>
  );
};

export default FurbyForm;
