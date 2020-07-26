/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

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

interface StyledLinkProps {
  isActive?: boolean
}
const StyledLink = styled.div`
  a {
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${(props: StyledLinkProps) => (props.isActive ? 'bold' : 'normal')};
  }
`

const Header: FC = () => {
  const { pathname } = useLocation()
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </StyledLink>
        <StyledLink isActive={pathname === '/login'}>
          <Link to="/login">Login</Link>
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}
export default Header
