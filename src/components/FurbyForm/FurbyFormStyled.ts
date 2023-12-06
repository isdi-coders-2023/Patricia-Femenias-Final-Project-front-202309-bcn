import styled from "styled-components";

const FurbyFormStyled = styled.form`
  width: 300px;
  left: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.degraded});
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.main};
  gap: 5px;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.main};

  .form {
    &__input {
      padding: 10px;
      font-size: 1rem;
      display: inline-block;
      width: 100%;
    }

    &__label {
      display: inline-block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    &__row {
      display: block;
      margin-bottom: 10px;
      flex-direction: row;
      position: relative;
      align-items: center;
    }
  }
`;

export default FurbyFormStyled;
