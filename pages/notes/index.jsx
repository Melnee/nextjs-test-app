import React from 'react'
import Link from 'next/link'


const Page = ({notes}) => (
<div>
  <h1>Note Index Page</h1>
  {notes.map(note=> (
    <Link href="/notes/[id].jsx" as={`/notes/${note.id}`}>
    {/* the as allows you to pass in a param */}
    {/* could also do '/notes/${var} */}
    {/* remember the href has to reference the filename */}
      <a>
          <strong>{note.title}</strong>
      </a>
    </Link>
    ))
  }
</div>
)
export default Page


export async function getServerSideProps() {
  //you must do a full url here, not a relative one
  const res = await fetch(`http://localhost:3005/api/note`) //calling the api
  const {data} = await res.json()

  // log data you got from api to the terminal
  console.log(data)
  return {
    props: {notes: data}
  }

}