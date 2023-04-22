import React from 'react'
import NavBar from "../components/NavBar";

const Shop = () => {
  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center text-centermax-h-none h-screen w-screen" id="#shop">
      <h4>shop</h4>
      {
        alert("Dummy link clicked")
      }
    </div>
    </>
  )
}

export default Shop