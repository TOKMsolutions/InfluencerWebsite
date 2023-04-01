import React from 'react'
import { useParams } from 'react-router-dom'

function Lookbook() {
  const { id } = useParams();
  console.log(id)
  return (
    <div className='flex justify-center items-center h-screen'>Lookbook: {id}</div>
  )
}

export default Lookbook