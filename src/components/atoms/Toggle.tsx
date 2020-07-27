import React, { FC } from 'react'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
`

const Notch = styled.div<{ isActive?: boolean }>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${props => (props.isActive ? '26px' : '1px')});
`

export interface ToggleProps {
  isActive?: boolean
  onToggle?: () => void
}
const Toggle: FC<ToggleProps> = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper data-testid="toggle" onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  )
}
export default Toggle
