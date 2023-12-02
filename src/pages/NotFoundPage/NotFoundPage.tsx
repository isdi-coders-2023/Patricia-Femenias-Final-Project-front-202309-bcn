import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <img
        className="not-found-image"
        src="/images/not-found-page.webp"
        alt="Error 404: page not found"
        width="300"
        height="300"
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
