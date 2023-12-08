import { useEffect, useState } from "react";
import {
  FurbyStructure,
  FurbyWithoutId,
} from "../../store/features/furbys/types";
import Button from "../Button/Button";
import FurbyFormStyled from "./FurbyFormStyled";

interface FurbyFormProps {
  submitAction: (newFurby: FurbyStructure) => void;
  initialState?: FurbyWithoutId;
}

const FurbyForm = ({ submitAction }: FurbyFormProps): React.ReactElement => {
  const emptyFurby: FurbyWithoutId = {
    name: "",
    type: "",
    year: 0,
    generation: 0,
    language: "",
    price: 0,
    howFoundIt: "",
    imageUrl: "",
  };

  const [newFurby, setNewFurby] = useState<FurbyWithoutId>(emptyFurby);

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

  useEffect(() => {
    const newFurbyValues = Object.values(newFurby);

    newFurbyValues.every((value) => value !== "");
  }, [newFurby]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(newFurby as FurbyStructure);
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
        <label className="form__label" htmlFor="howFind">
          How did you find it?:
        </label>
        <textarea
          className="form__input"
          id="howFind"
          value={newFurby.howFoundIt}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture Url:
        </label>
        <input
          className="form__input"
          type="url"
          id="picture"
          value={newFurby.imageUrl}
          onChange={onChangeEditFurby}
          required
        />
      </div>
      <Button className="button__form" text="Create" />
    </FurbyFormStyled>
  );
};

export default FurbyForm;
