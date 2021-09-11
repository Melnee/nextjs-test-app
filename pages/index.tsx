import React from 'react'
import { jsx } from 'theme-ui'
import Link from 'next/link'

import dynamic from 'next/dynamic'

//this is a way of doing an import and not having it do server side rendering
//this component in the returned div will only render when there is a request that includes this component
const BrowserComponent = dynamic(() => import('../src/components/browser'), {ssr: false})

const Page = ({content}) => (
  <div sx={{ height: 'calc(100vh - 60px' }}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'top'}}>
      {/* variant points to the theme.js, containers.page, takes those styles and applies them there  */}
      <h1 sx={{fontSize: 18, my:0}}>{content.title}</h1>
      <BrowserComponent/>
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


export function getStaticProps(){
  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  }
}