import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-color: #eee;
`
const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Roboto';
  background: none;
  left: initial;
  top: initial;
`

const MenuAlt = styled(Menu)`
  border-top: 5px solid black;
`
const Header = () => {
  return (
    <HeaderWrapper>
      <MenuAlt>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </MenuAlt>
    </HeaderWrapper>
  )
}
export default Header
