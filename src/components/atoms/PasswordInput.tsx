import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Input } from 'components/atoms'

const PasswordInputStyled = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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

  return <PasswordInputStyled {...props} />
}
export default PasswordInput
