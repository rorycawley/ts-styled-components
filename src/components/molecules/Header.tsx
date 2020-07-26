/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { StyledLink } from 'src/components/atoms'

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

const Header: FC = () => {
  const { pathname } = useLocation()
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}
export default Header
