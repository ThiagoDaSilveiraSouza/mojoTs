import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type ButtonProps = {
  $ischecked: string;
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5px;
    background: var(--primary-color);
    border-radius: 15px;
    transform: ${({ $ischecked }) => $ischecked === "true" && "rotate(45deg)"};
    transition: 0.3s;

    &::after,
    &::before {
      content: "";
      position: absolute;
      background: var(--primary-color);
      top: ${({ $ischecked }) => ($ischecked === "false" ? "10px" : "0px")};
      width: 100%;
      height: 5px;
      border-radius: 15px;
      transition: 0.3s;
    }

    &::after {
      top: ${({ $ischecked }) => ($ischecked === "false" ? "-10px" : "0px")};
      transform: ${({ $ischecked }) =>
        $ischecked === "true" && "rotate(-90deg)"};
    }
  }
`;

type HamburgerButtonProps = {
  useButton: [boolean, Dispatch<SetStateAction<boolean>>];
};

export const HamburgerButton = ({ useButton }: HamburgerButtonProps) => {
  const [isChecked, setIsChecked] = useButton;
  return (
    <Button
      onClick={() => setIsChecked((prevState) => !prevState)}
      $ischecked={isChecked.toString()}
    >
      <span></span>
    </Button>
  );
};
