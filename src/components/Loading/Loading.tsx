import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading">
        <div className="rhombus2">
          <div className="circle21"></div>
          <div className="circle22"></div>
        </div>
        <div className="loading__text">
          <span>Loading...</span>
        </div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
