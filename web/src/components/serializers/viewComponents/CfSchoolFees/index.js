import React from 'react'
import Helmet from 'react-helmet'
import ClientOnly from '../../../../utils/ClientOnly'

function cfSchoolFees () {
  return (
    <ClientOnly>
      <Helmet>
        <script src='https://empoweredby.communityfunded.com/collaborate.js' />
      </Helmet>
      <div id='empowered-by-cf' data-user='2e6ed74c559e746a1390716cf391231b' styles={{width: '100%'}} />
    </ClientOnly>
  )
}

export default cfSchoolFees
