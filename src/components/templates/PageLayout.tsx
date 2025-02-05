import React, { FC } from 'react'

import styled from 'styled-components'

import Header from 'components/molecules/Header'

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto';
  }
`

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}
export default PageLayout
