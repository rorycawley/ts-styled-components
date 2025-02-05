/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { MobileMenuIcon, StyledLink, Toggle, ToggleProps } from 'components/atoms'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${p => p.theme.colors.primary}, ${p => p.theme.colors.secondary});
  border-bottom: 3px solid ${p => p.theme.colors.secondary};
`
interface MenuProps {
  open?: boolean
}
const Menu = styled.nav<MenuProps>`
  background: white;
  border-bottom: 3px solid ${p => p.theme.colors.secondary};
  box-sizing: border-box;
  display: ${p => (p.open ? 'block' : 'none')};

  font-family: 'Roboto';
  left: 0;
  padding: 8px;
  position: absolute;
  width: 100%;
  top: 60px;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    top: initial;
    left: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`

const Header: FC = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { id, setTheme } = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  )
}
export default Header
