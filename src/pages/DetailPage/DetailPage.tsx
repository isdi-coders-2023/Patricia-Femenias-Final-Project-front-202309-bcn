import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import PageStyled from "../PageStyled";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useFurbysApi from "../../hooks/useFurbysApi";
import {
  deleteFurbyActionCreator,
  loadSelectedFurbyActionCreator,
} from "../../store/features/furbys/furbysSlice";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): React.ReactElement => {
  const { loadSelectedFurby, deleteFurby } = useFurbysApi();
  const { furbyId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    selectedFurby: {
      _id,
      generation,
      howFoundIt,
      imageUrl,
      language,
      name,
      price,
      type,
      year,
    },
  } = useAppSelector((state) => state.furbysState);

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const selectedFurby = await loadSelectedFurby(furbyId!);

      dispatch(loadSelectedFurbyActionCreator(selectedFurby!));
    })();
  }, [dispatch, loadSelectedFurby, furbyId, navigate]);

  const deleteFurbyButton = async () => {
    await deleteFurby(_id);

    dispatch(deleteFurbyActionCreator(_id));

    navigate("/");
    scrollTo(0, 0);
  };

  return (
    <>
      <PageStyled>
        <h2 className="page-title">My Furby's details</h2>
      </PageStyled>
      <DetailPageStyled>
        <img
          className="furby-card__image"
          src={imageUrl}
          alt={name}
          width="300"
          height="300"
        />
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
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Language:</dt>
            <dd className="furby-card__info">{language}</dd>
          </div>
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Price:</dt>
            <dd className="furby-card__info">{price}</dd>
          </div>
          <div className="furby-card__textarea-container">
            <dt className="furby-card__title-info">How did you find it?</dt>
            <dd className="furby-card__textarea">{howFoundIt}</dd>
          </div>
        </dl>
        <div className="furby-card__button-container">
          <Button
            text="Modify"
            actionOnClick={() => {
              navigate(`/my-furbys/${_id}/modify`);
            }}
          />
          <Button text="Delete" actionOnClick={deleteFurbyButton} />
        </div>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
