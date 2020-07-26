import React, { FC } from 'react'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface LinkProps {
  isActive?: boolean
  to: string
}
const Link: FC<LinkProps> = ({ isActive, to, children, ...props }) => (
  <ReactRouterDomLink to={to} {...props}>
    {children}
  </ReactRouterDomLink>
)

export const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props: LinkProps) => (props.isActive ? 'bold' : 'normal')};
  color: black;
`
