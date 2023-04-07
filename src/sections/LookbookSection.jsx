import React, { useState } from "react";

function LookbookSection() {
    const [idx, setIdx] = useState(1);
    const maxImgs = 4;

    const disabledBtn = 'bg-[#79797950]';
    const enabledBtn = 'bg-[#00000050]';

    const handlePrev = () => {
      setIdx(idx => idx-1);
      //use transition
    };

    const handleToggle = () => {
      setIdx(idx => idx+1);
      //use transition

      setExpanded(!expanded);
    };

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className={`w-full h-screen flex items-center p-16 relative overflow-auto `}>
                <button className={`w-8 h-8 absolute top-0 right-16 ${expanded ? 'block' : 'hidden'}`} onClick={handleToggle}>
                    X
                </button>
                <div className={`w-fit min-h-fit flex overflow-auto ${expanded ? 'gap-x-16' : 'w-full h-full items-center'}`}>
                    <div className={`${expanded ? 'h-[45vw] aspect-[4/5]' : 'w-3/5 h-full'} bg-red-900 relative`}>
                        <img src="" alt="" />
                        <button
                            className={`w-12 aspect-square rounded-full ${idx === maxImgs ? disabledBtn : enabledBtn} absolute right-8 my-auto bottom-0 top-0 ${expanded ? 'hidden' : 'block'}`}
                            disabled={idx === maxImgs}
                            onClick={handleToggle}
                        >
                            {">"}
                        </button>
                    </div>
                    <div className={`w-[5%] h-full ${expanded ? 'hidden' : 'block'}`}>

                    </div>
                    <div className={`${expanded ? 'h-[45vw] aspect-[4/5]' : 'w-[35%] h-[90%]'} bg-red-900`}>

                    </div>
                    {
                        expanded &&
                        <>
                            <div className={`h-[45vw] aspect-[4/5] bg-red-900`}>

                            </div>
                            <div className={`h-[45vw] aspect-[4/5] bg-red-900`}>

                            </div>
                            <div className={`h-[45vw] aspect-[4/5] bg-red-900`}>

                            </div>
                            <div className={`h-[45vw] aspect-[4/5] bg-red-900`}>

                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default LookbookSection;
