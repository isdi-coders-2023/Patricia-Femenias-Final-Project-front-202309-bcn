import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PageStyled from "../PageStyled";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useFurbysApi from "../../hooks/useFurbysApi";
import { loadSelectedFurbyActionCreator } from "../../store/features/furbys/furbysSlice";
import DetailPageStyled from "./DetailPageStyled";
import { FurbyStructure } from "../../store/features/furbys/types";

const DetailPage = (): React.ReactElement => {
  const { furbyId } = useParams();
  const dispatch = useAppDispatch();
  const { loadSelectedFurby } = useFurbysApi();
  const selectedFurby = useAppSelector(
    (state) => state.furbysState.selectedFurby,
  );

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const furby = await loadSelectedFurby(furbyId as string);

      dispatch(loadSelectedFurbyActionCreator(furby as FurbyStructure));
    })();
  }, [dispatch, furbyId, loadSelectedFurby]);

  return (
    <>
      <PageStyled>
        <h2 className="page-title">My Furby's details</h2>
      </PageStyled>
      <DetailPageStyled>
        <img
          className="furby-card__image"
          src={selectedFurby.imageUrl}
          alt={selectedFurby.name}
          width="300"
          height="300"
        />
        <div className="furby-card__name-container">
          <span>♥</span>
          <h2 className="furby-card__name">{selectedFurby.name}</h2>
          <span>♥</span>
        </div>
        <dl className="furby-card__info-container">
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Type:</dt>
            <dd className="furby-card__info">{selectedFurby.type}</dd>
          </div>
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Year:</dt>
            <dd className="furby-card__info">{selectedFurby.year}</dd>
          </div>
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Generation:</dt>
            <dd className="furby-card__info">{selectedFurby.generation}</dd>
          </div>
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Language:</dt>
            <dd className="furby-card__info">{selectedFurby.language}</dd>
          </div>
          <div className="furby-card__details">
            <dt className="furby-card__title-info">Price:</dt>
            <dd className="furby-card__info">{selectedFurby.price}</dd>
          </div>
          <div className="furby-card__textarea-container">
            <dt className="furby-card__title-info">How did you find it?</dt>
            <dd className="furby-card__textarea">{selectedFurby.howFoundIt}</dd>
          </div>
        </dl>
        <div className="furby-card__button-container">
          <Button text="Modify" />
          <Button text="Delete" />
        </div>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
