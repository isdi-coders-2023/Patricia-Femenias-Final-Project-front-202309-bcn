import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    width: 300px;
    gap: 30px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.main};
    background: linear-gradient(
      to top left,
      ${({ theme }) => theme.colors.degraded}
    );
    text-transform: uppercase;
    padding: 20px;
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.main};
    border-radius: 5px;
  }

  .active-navbar {
    font-weight: bold;
  }

  .non-active-navbar {
    font-weight: normal;
  }
`;

export default NavigationStyled;
