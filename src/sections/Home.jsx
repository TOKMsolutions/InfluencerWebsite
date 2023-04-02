import React from "react";
import NavBar from "../components/NavBar";
import HeroImageContainer from "../components/HeroImageContainer";

const winLocation = window.location.pathname;

function Home() {
    // TODO: find more efficient way instead of top-[50px] so that header is position: fixed but still takes up space
    return (
        <>
            <NavBar />
            <div className="home-section bg-gradient-to-r from-[#e1e1d3] to-[#f4fdf1] w-full h-screen flex flex-col justify-center items-center relative top-16">
                <div className="container flex flex-col md:flex-row justify-center md:items-center max-w-none max-h-none h-screen">
                    <div className="w-full h-1/3 md:h-full md:w-1/2">
                        <div className="flex flex-col gap-y-2 px-12 pt-4 md:p-16 md:gap-y-6 mb-8 md:mb-0">
                            <h1 className="text-black font-hv text-4xl md:text-6xl">Resilient.</h1>
                            <h1 className="text-black font-hv text-4xl md:text-6xl">Elegant.</h1>
                            <h1 className="text-black font-hv text-4xl md:text-6xl">Vibrant.</h1>
                            <h1 className="text-black font-hv text-4xl md:text-6xl">Gracious.</h1>
                            <h1 className="text-black font-hv text-4xl md:text-6xl">Captivating.</h1>
                        </div>
                        <div className="hidden md:block px-16 text-black">
                            <p>
                                Welcome to my world! Here you'll find all my
                                social links. Have you been trying to reach me ?
                                Now, you can by scheduling a 1-on-1 meeting. We
                                can discuss strategies on how you can become a
                                successful independant influencer just like me
                                and show the world your unique excellence.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-2/3 md:h-full md:w-1/2">
                      <HeroImageContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
