import styled from "styled-components";

const DetailPageStyled = styled.main`
  text-align: center;
  margin-top: 20px;
  width: 300px;
  background: linear-gradient(
    to top left,
    #62ffab 4%,
    #e7f962 14%,
    #ff81d2 84%
  );
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.main};
  font-size: 1rem;

  .furby-card {
    &__name-container {
      display: flex;
      align-items: center;
    }

    &__name {
      text-transform: uppercase;
      margin: 20px 5px;
      font-size: 1.25rem;
      font-weight: bold;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 15px 30px 15px;
    }

    &__details {
      display: flex;
    }

    &__title-info {
      font-weight: bold;
      margin-right: 10px;
    }

    &__image {
      object-fit: cover;
      border-radius: 15px 15px 0 0;
    }

    &__button-container {
      display: flex;
      flex-direction: column;
    }

    &__textarea-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    &__textarea {
      text-align: start;
    }

    @media (max-width: 360px) {
      width: 220px;
    }
  }
`;

export default DetailPageStyled;
