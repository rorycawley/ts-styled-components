import React, { FC } from 'react'

import { PageLayout } from 'components/templates'

interface FourZeroFourProps {
  location?: { pathname: string }
}
const FourZeroFour: FC<FourZeroFourProps> = ({ location }) => {
  return (
    <PageLayout>
      404 Not Found
      {location ? <code>, no match for {location.pathname}</code> : ''}
    </PageLayout>
  )
}
export default FourZeroFour
