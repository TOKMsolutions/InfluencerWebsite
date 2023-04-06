import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    const [email, setEmail] = useState("");

    const handleChange = ({ target }) => {
        setEmail(target.value);
    };

    return (
        <footer className="w-full h-[32rem] md:h-64 bg-transparent">
            <div className="w-full h-full md:h-3/4 border-y-[1.5px] border-[#bdbdbd] md:px-24 md:pt-10 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 grid-flow-col md:grid-flow-row gap-x-16">
              <div className="h-full flex flex-col gap-y-2 justify-center md:justify-start md:border-none border-b-[1.5px] border-[#bdbdbd] px-12">
                  <h1 className="text-sm md:text-lg text-black leading-tight">Keep up to date with my latest shoots, releases, and more!</h1>
                  <div className="w-full md:w-full h-[2.5rem] md:h-10 rounded-xl border-[1px] border-black">
                    <input
                      type="email"
                      value={email}
                      placeholder={"Your email:"}
                      onChange={handleChange}
                      className="w-full h-full bg-transparent pl-4 rounded-xl bg-gradient-to-r from-[#e2e6e5] to-[#e9e4de] text-sm md:text-base text-black"
                    />
                  </div>
              </div>
              <div className="h-full flex items-center md:items-start md:justify-center border-b-[1.5px] border-[#bdbdbd] md:border-none px-12">
                <ul>
                  <li>
                    <Link to={""} className="text-black font-normal">Home</Link>
                  </li>
                  <li>
                    <Link to={""} className="text-black font-normal">Shop</Link>
                  </li>
                  <li>
                    <Link to={""} className="text-black font-normal">Contact</Link>
                  </li>
                  <li>
                    <Link to={""} className="text-black font-normal">Lookbook</Link>
                  </li>
                </ul>
              </div>
              <div className="h-full flex flex-col justify-center md:justify-start md:items-start gap-y-4 px-12">
                  <ul>
                    <li>
                      <Link to={""} className="text-black font-normal">Mentoring</Link>
                    </li>
                    <li>
                      <Link to={""} className="text-black font-normal">1-on-1 Coaching Sessions</Link>
                    </li>
                  </ul>
                  <ul className="flex gap-x-4">
                    <li>
                      <Link to="" target="_blank">
                        <img src="twitter.png" alt="My Twitter" className="h-6 object-contain transition-transform duration-300 hover:scale-125" />
                      </Link>
                    </li>
                    <li>
                      <Link to="" target="_blank">
                        <img src="tiktok.png" alt="My TikTok" className="h-6 object-contain transition-transform duration-300 hover:scale-125" />
                      </Link>
                    </li>
                    <li>
                      <Link to="" target="_blank">
                        <img src="youtube.png" alt="My YouTube" className="h-6 object-contain transition-transform duration-300 hover:scale-125" />
                      </Link>
                    </li>
                    <li>
                      <Link to="" target="_blank">
                        <img src="instagram.png" alt="My Instagram" className="h-6 object-contain transition-transform duration-300 hover:scale-125" />
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-12 md:h-1/4">
              <span className="text-black text-center text-[.6rem] md:text-xs">© Phoebe Palmer, 2023. Built with Influencer Theme by TOKM Solutions.</span>
            </div>
        </footer>
    );
}

export default Footer;
