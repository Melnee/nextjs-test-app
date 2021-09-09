import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  const { id } = router.query 
  //const { //filename for param }
  //router.query.id if filename/param is [id]

  console.log(id)
  return (
    <h1>
      Note {id}
    </h1>
  )
}

export default Page