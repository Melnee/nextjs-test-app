import React from 'react'
import { useRouter } from 'next/router'

const Page = ({note}) => {
  const router = useRouter()

  const { id } = router.query 
  //const { //filename for param }
  //router.query.id if filename/param is [id]

  console.log(id)
  return (
    <h1>
      Note: {note.id}
    </h1>
  )
}

export default Page

export async function getServerSideProps({params, req, res}){
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

  if (!response.ok){
    res.writeHead(302, {
      Location: '/notes'
    })
    res.end()
    return {
      props: {}
    }
  }

  const {data}  = await response.json()

  return {
    props: {note: data}
  }
}