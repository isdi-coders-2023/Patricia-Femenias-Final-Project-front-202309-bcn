import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .header-logo {
    object-fit: cover;
    margin-bottom: 20px;
    width: 300px;
    height: 300px;
    padding-top: 20px;
  }
`;

export default HeaderStyled;
