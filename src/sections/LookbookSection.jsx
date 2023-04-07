import React, { useState } from "react";

function LookbookSection() {
    const [expanded, setExpanded] = useState(false);

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

    const scrollContainer = document.querySelector('.lookbook-container');
    const [scrollAmount, setScrollAmount] = useState(0);

    const handleScroll = () => {
        setScrollAmount((scrollContainer?.scrollLeft / (scrollContainer?.scrollWidth - scrollContainer?.clientWidth)* 100).toFixed(0));
    };

    const [startX, setStartX] = useState(0);
    const [grabbing, setGrabbing] = useState(false);

    const handleMouseDown = ({ clientX }) => {
        setStartX(clientX);
        setGrabbing(true);
    };

    const handleMouseUp = ({ clientX }) => {
        setGrabbing(false);
        const diff = clientX - startX;
        scrollContainer.scrollLeft -= diff;
    };

    return (
        <>
            <div className={`w-full h-screen flex items-center p-16 relative overflow-auto`}>
                {
                    expanded &&
                    <div className="w-4/12 h-2 rounded-full absolute top-0 mx-auto left-0 right-0">
                        <div className="w-full h-full rounded-full overflow-clip bg-[#dbdbdb]">
                            <div className="h-full w-0 rounded-full bg-[#808080]" style={{width: `${scrollAmount}%`}}>

                            </div>
                        </div>
                    </div>
                }
                <button className={`w-8 h-8 absolute top-0 right-16 ${expanded ? 'block' : 'hidden'}`} onClick={handleToggle}>
                    X
                </button>
                <div
                    className={`w-fit min-h-fit flex overflow-auto lookbook-container no-scroll scroll-smooth ${grabbing ? 'cursor-grabbing' : 'cursor-grab'} ${expanded ? 'gap-x-16' : 'w-full h-full items-center'}`}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    <div className={`bg-[#808080] relative ${expanded ? 'h-[45vw] aspect-[4/5]' : 'w-3/5 aspect-[4/5] lg:aspect-[3/2]'}`}>
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
                    <div className={`${expanded ? 'h-[45vw] aspect-[4/5]' : 'w-[35%] aspect-[4/5]'} bg-[#808080]`}>

                    </div>
                    {
                        expanded &&
                        <>
                            <div className={`h-[45vw] aspect-[4/5] bg-[#808080]`}>

                            </div>
                            <div className={`h-[45vw] aspect-[4/5] bg-[#808080]`}>

                            </div>
                            <div className={`h-[45vw] aspect-[4/5] bg-[#808080]`}>

                            </div>
                            <div className={`h-[45vw] aspect-[4/5] bg-[#808080]`}>

                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default LookbookSection;
