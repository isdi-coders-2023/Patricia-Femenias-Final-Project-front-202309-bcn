import styled from "styled-components";

const FurbyCardStyled = styled.article`
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
      gap: 5px;
      padding-left: 6px;
      padding-bottom: 30px;
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

    @media (max-width: 360px) {
      width: 220px;
    }
  }
`;

export default FurbyCardStyled;
