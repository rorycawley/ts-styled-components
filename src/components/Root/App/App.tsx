import React, { FC } from 'react'
import { Button } from 'components/common'

const App: FC = () => {
  return (
    <div data-testid='app'>
      <h1>App</h1>
      <Button>Test</Button>
    </div>
  )
}
export default App
