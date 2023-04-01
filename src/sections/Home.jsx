import React from "react";
import NavBar from "../components/NavBar";

const winLocation = window.location.pathname
function Home() {
    return (
        <>
          <NavBar />
          <div className="home-section bg-gradient-to-r from-[#e1e1d3] to-[#f4fdf1] w-screen h-screen flex flex-col justify-center items-center">
          {window.location.href}
            <div className="
              container 
              flex flex-row justify-center items-center
              max-w-none max-h-none h-screen
            ">
              test
            </div>
          </div>
        </>
    );
}

export default Home;
