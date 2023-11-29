import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.main};
    background: linear-gradient(
      to top left,
      ${({ theme }) => theme.colors.degraded}
    );
    text-transform: uppercase;
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.main};
    border-radius: 5px;
  }

  .active {
    font-weight: bold;
  }
`;

export default NavigationStyled;
