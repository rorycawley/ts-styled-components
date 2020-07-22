import styled, { StyledComponent } from 'styled-components'

interface ButtonProps {
  secondary?: boolean
}

const Button = styled.button<ButtonProps>`
  background: ${props => (props.secondary ? 'black' : '#f8049c')};
  color: white;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`
export default Button
