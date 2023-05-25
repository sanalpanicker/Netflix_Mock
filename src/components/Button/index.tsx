import { FC } from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClickHandler: () => void;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  onClickHandler,
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
