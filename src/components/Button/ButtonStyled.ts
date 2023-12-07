import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.mainFont};
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
  border-radius: 14px;
  padding: 8px 16px;
  margin-bottom: 20px;
  width: 275px;
  height: 48px;
  font-size: 1rem;
  text-transform: uppercase;
  justify-content: center;
  align-self: center;

  &.button {
    &__form {
      width: 265px;
    }
  }
`;

export default ButtonStyled;
