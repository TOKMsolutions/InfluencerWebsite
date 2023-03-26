import React from 'react'
import { useParams } from 'react-router-dom'

function Lookbook() {
  const { id } = useParams();
  console.log(id)
  return (
    <div>Lookbook: {id}</div>
  )
}

export default Lookbook