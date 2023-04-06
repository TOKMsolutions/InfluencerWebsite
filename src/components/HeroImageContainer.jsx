import React, { useState } from "react";

function HeroImageContainer() {
    const [idx, setIdx] = useState(1);
    const maxImgs = 4;

    const disabledBtn = 'bg-[#79797950]';
    const enabledBtn = 'bg-[#00000050]';

    const handlePrev = () => {
      setIdx(idx => idx-1);
      //use transition
    };

    const handleNext = () => {
      setIdx(idx => idx+1);
      //use transition
    };

    return (
        <div className="w-full h-full relative flex items-center overflow-clip">
            <div className="w-1/12 h-full flex items-center">
                <div className={`h-full md:h-4/5 w-full ${idx === 0 && 'invisible'}`}>
                    {idx > 0 &&
                        <img src={`/lookbook/0/${idx-1}.jpg`} alt="" className="w-full h-full object-cover" />
                    }
                </div>
            </div>
            <div className="w-1/12 h-full flex justify-center items-center">
                <button
                    className={`w-full aspect-square rounded-full ${idx === 0 ? disabledBtn : enabledBtn}`}
                    disabled={idx === 0}
                    onClick={handlePrev}
                >
                    {"<"}
                </button>
            </div>
            <div className="w-8/12 h-full flex items-center">
                <div className="h-full md:h-4/5 w-full">
                    <img src={`/lookbook/0/${idx}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="w-1/12 h-full flex justify-center items-center">
                <button
                    className={`w-full aspect-square rounded-full ${idx === maxImgs ? disabledBtn : enabledBtn}`}
                    disabled={idx === maxImgs}
                    onClick={handleNext}
                >
                    {">"}
                </button>
            </div>
            <div className="w-1/12 h-full flex items-center">
                <div className={`h-full md:h-4/5 w-full ${idx === maxImgs && 'invisible'}`}>
                    {idx <= maxImgs &&
                        <img src={`/lookbook/0/${idx+1}.jpg`} alt="" className="w-full h-full object-cover" />
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroImageContainer;
