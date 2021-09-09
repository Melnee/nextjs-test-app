import React from 'react'
import Link from 'next/link'


const Page = () => (
<div>
    <h1>Note Index Page</h1>
    <Link href="/notes/[id].jsx" as={'/notes/1'}>
    {/* the as allows you to pass in a param */}
    {/* could also do '/notes/${var} */}
    {/* remember the href has to reference the filename */}
        <a>
            Note 1
        </a>
    </Link>
</div>
)
export default Page