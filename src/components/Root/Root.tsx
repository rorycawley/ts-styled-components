import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

const Root: FC = () => {
  return (
    <div data-testid='root'>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </div>
  )
}

export default Root
