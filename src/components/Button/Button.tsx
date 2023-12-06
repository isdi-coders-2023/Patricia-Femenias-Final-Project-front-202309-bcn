import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  actionOnClick?: () => void;
  className?: string;
}

const Button = ({
  className,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
