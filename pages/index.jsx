import React from 'react'
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Page = () => (
  <div sx={{ height: 'calc(100vh - 60px' }}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'top'}}>
      {/* variant points to the theme.js, containers.page, takes those styles and applies them there  */}
      <h1 sx={{fontSize: 18, my:0}}>This is a really dope note taking app</h1>
      <Link href='/notes'>
          <a>
            Link 
            {/* recommended to wrap link text in an anchor tag */}
          </a>
      </Link>
    </div>  
  </div>
)

export default Page