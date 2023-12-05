import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000c;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      width: 100%;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      margin: auto;
      color: #ea4c89;
    }
  }

  .rhombus2 {
    margin: 40px 0 0 60px;
    margin: auto;
    margin-top: 100px;
    border-radius: 10px;
    height: 75px;
    width: 75px;
    margin-bottom: 10px;
    float: center;
    animation-delay: 0.9s;
    animation-duration: 0.8s;
    animation-name: pump;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.26, -0.53, 0.57, 2.32);
  }

  .rhombus2:before {
    content: "";
    position: absolute;
    background: #ea4c89;
    height: 40px;
    width: 40px;
    z-index: 0;
    margin-top: 15px;
    margin-left: 15px;
    transform: rotate(45deg);
  }

  .rhombus2 .circle21 {
    content: "";
    position: absolute;
    background: #ea4c89;
    height: 40px;
    width: 40px;
    z-index: 1;
    border-radius: 50%;
  }

  .rhombus2 .circle22 {
    content: "";
    position: absolute;
    background: #ea4c89;
    height: 40px;
    width: 40px;
    z-index: 1;
    margin-left: 30px;
    border-radius: 50%;
  }

  @keyframes pump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes change2 {
    25%,
    50% {
      margin-top: 30px;
      margin-left: 0px;
    }
    75%,
    100% {
      margin-top: 0px;
      margin-left: 30px;
    }
  }

  @media (prefers-reduced-motion) {
    .loading,
    .rhombus2,
    .circle21,
    .circle22 {
      display: none;
    }
  }
`;

export default LoadingStyled;
