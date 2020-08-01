import React from 'react'
import Helmet from 'react-helmet'
import ClientOnly from '../../../../utils/ClientOnly'

function cfDonate () {
  return (
    <ClientOnly>
      <Helmet>
        <script async src='https://empoweredby.communityfunded.com/collaborate.js' />
      </Helmet>
      <div className='cms-embed' data-cms-embed='CjxzY3JpcHQgc3JjPSJodHRwczovL2VtcG93ZXJlZGJ5LmNvbW11bml0eWZ1bmRlZC5jb20vY29sbGFib3JhdGUuanMiPjwvc2NyaXB0Pgo8ZGl2IGlkPSJlbXBvd2VyZWQtYnktY2YiIGRhdGEtdXNlcj0iMGFkNTAwODVhOTU5N2I2OTlkNDI0OGMyNWUzMzk0ODgiIGRhdGEtY29kZT0iWUNQVFhZIiBzdHlsZT0id2lkdGg6IDEwMCU7Ij48L2Rpdj4='><div id='empowered-by-cf' data-user='0ad50085a9597b699d4248c25e339488' data-code='YCPTXY' styles={{width: '100%'}} /></div>
    </ClientOnly>
  )
}

export default cfDonate
