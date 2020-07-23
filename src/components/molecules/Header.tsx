import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-color: #eee;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </HeaderWrapper>
  )
}
export default Header
