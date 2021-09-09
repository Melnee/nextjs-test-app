import React from 'react'
import Link from 'next/link'

const Page = () => (
  <div>
    <h1>
      <Link href='/notes'>
        <a>
          Link 
          {/* recommended to wrap link text in an anchor tag */}
        </a>
      </Link>
    </h1>
  </div>
)

export default Page