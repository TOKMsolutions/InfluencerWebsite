import React, { useState } from "react";

function HeroImageContainer() {
    const [idx, setIdx] = useState(1);
    const maxImgs = 4;

    const disabledBtn = 'bg-[#7979790]';
    const enabledBtn = 'bg-[#00000080]';

    const handlePrev = () => {
      setIdx(idx => idx-1);
      //use transition
    };

    const handleNext = () => {
      setIdx(idx => idx+1);
      //use transition
    };

    return (
        <div className="w-full h-full relative flex items-center overflow-clip ">
            <div className="w-1/12 h-full flex items-center ">
                <div className={`h-full md:h-4/5 w-full md:mt-[-4rem] ${idx === 0 && 'invisible'}`}>
                    {idx > 0 &&
                        <div className="h-full flex items-center" >
                            <div className="h-fit cursor-pointer" onClick={handlePrev}>
                                <img src={`/lookbook/0/${idx-1}.jpg`} alt="" className="object-cover w-full h-full blur-[1px] hover:blur-none transition-[filter] duration-150" />
                            </div>
                        </div> 
                    }
                </div>
            </div>
            <div className="w-1/12 h-full flex justify-center items-center md:mt-[-4rem]">
                {/*
                <button
                    className={`${idx === 0 ? disabledBtn : enabledBtn} drop-shadow hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] w-full aspect-square rounded-full bg-cover bg-[url('leftArrow.png')] `}
                    disabled={idx === 0}
                    onClick={handlePrev}
                >
                    {""}
                </button>
                */}
            </div>
            <div className="w-8/12 h-full flex items-center">
                <div className="h-full md:h-4/5 w-full md:mt-[-4rem]">
                    <img src={`/lookbook/0/${idx}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="w-1/12 h-full flex justify-center items-center md:mt-[-4rem]">
                {/* 
                <button
                    className={`${idx === maxImgs ? disabledBtn : enabledBtn} drop-shadow hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] w-full aspect-square rounded-full bg-cover bg-[url('rightArrow.png')] `}
                    disabled={idx === maxImgs}
                    onClick={handleNext}
                >
                    {""}
                </button>
                */}
            </div>
            <div className="w-1/12 h-full flex items-center">
                <div className={`h-full md:h-4/5 w-full md:mt-[-4rem] ${idx === maxImgs && 'invisible'}`}>
                    {idx <= maxImgs &&
                        <div className="h-full flex items-center" >
                            <div className="h-fit cursor-pointer" onClick={handleNext}>
                            <img src={`/lookbook/0/${idx+1}.jpg`} alt="" className="object-contain w-full h-full blur-[1px] hover:blur-none transition-[filter] duration-150" />
                            </div>
                        </div> 
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroImageContainer;
