import React, { FC } from 'react'
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
  background: none;
  border-bottom: none;
  display: flex;
  font-family: 'Roboto';
  left: initial;
  margin: auto 0 auto auto;
  padding: 8px;
  position: relative;
  width: initial;
  top: initial;
`

// add style to an existing styled component
// const MenuAlt = styled(Menu)`
//   border-top: 5px solid black;
// `

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
`

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}
export default Header
