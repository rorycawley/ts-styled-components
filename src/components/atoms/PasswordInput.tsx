/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Input } from 'components/atoms'

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`

interface InputProps {
  name?: string
  placeholder?: string
}

const PasswordInputStyled = styled(Input).attrs<InputProps>(() => ({
  name: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: normal;
  font-family: 'Roboto';
  cursor: pointer;
  user-select: none;
  color: black;
`

interface TextFieldProps {
  type?: string
  placeholder?: string
  name?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const PasswordInput = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(s => !s)}>{showPassword ? 'Hide' : 'Show'}</ToggleButton>
      </PasswordInputWrapper>
    </>
  )
}
export default PasswordInput
