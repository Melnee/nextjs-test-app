import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  const { params } = router.query 
  //const { //filename for param }
  //router.query.id if filename/param is [id]

  console.log(params)
  return (
    <h1>
      Note {params}
    </h1>
  )
}

export default Page