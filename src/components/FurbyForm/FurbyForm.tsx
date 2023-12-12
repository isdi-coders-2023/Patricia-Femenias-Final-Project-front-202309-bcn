import { useEffect, useState } from "react";
import {
  FurbyStructure,
  FurbyWithoutId,
} from "../../store/features/furbys/types";
import Button from "../Button/Button";
import FurbyFormStyled from "./FurbyFormStyled";

interface FurbyFormProps {
  submitAction: (furby: FurbyWithoutId) => void;
  selectedFurby?: FurbyStructure;
  buttonText: string;
}

const FurbyForm = ({
  buttonText,
  submitAction,
  selectedFurby,
}: FurbyFormProps): React.ReactElement => {
  let emptyFurby: FurbyWithoutId = {
    name: "",
    type: "",
    year: 0,
    generation: 0,
    language: "",
    price: 0,
    howFoundIt: "",
    imageUrl: "",
  };

  if (selectedFurby) {
    emptyFurby = selectedFurby;
  }

  const [newFurby, setNewFurby] = useState<FurbyWithoutId>(emptyFurby);

  useEffect(() => {
    Object.values(newFurby).every((field) => field !== "");
  }, [newFurby]);

  const onChangeEditFurby = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewFurby((currentNewFurby) => ({
      ...currentNewFurby,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitAction(newFurby);

    scrollTo(0, 0);
  };

  return (
    <FurbyFormStyled
      onSubmit={onFormSubmit}
      className="form"
      autoComplete="off"
    >
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={newFurby.name}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="type">
          Type:
        </label>
        <input
          className="form__input"
          type="text"
          id="type"
          value={newFurby.type}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="year">
          Year:
        </label>
        <input
          className="form__input"
          type="number"
          id="year"
          value={newFurby.year}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="generation">
          Generation:
        </label>
        <input
          className="form__input"
          type="text"
          id="generation"
          value={newFurby.generation}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="language">
          Language:
        </label>
        <input
          className="form__input"
          type="text"
          id="language"
          value={newFurby.language}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="price">
          Price in €:
        </label>
        <input
          className="form__input"
          type="number"
          id="price"
          value={newFurby.price}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="howFoundIt">
          How did you find it?:
        </label>
        <textarea
          className="form__input"
          id="howFoundIt"
          value={newFurby.howFoundIt}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="imageUrl">
          Picture Url:
        </label>
        <input
          className="form__input"
          type="url"
          id="imageUrl"
          value={newFurby.imageUrl}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <Button className="button__form" text={buttonText} />
    </FurbyFormStyled>
  );
};

export default FurbyForm;
