import styled, { StyledComponent, css } from "styled-components";

interface ButtonProps {
  secondary?: boolean;
  large?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${(props) =>
    props.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  background: ${(props) => (props.secondary ? "black" : "#f8049c")};
  color: white;
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
export default Button;
