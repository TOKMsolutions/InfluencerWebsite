import React, { useRef, useState } from "react";

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

    const scrollContainerRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(0);

    const handleScroll = () => {
        setScrollAmount((scrollContainerRef.current?.scrollLeft / (scrollContainerRef.current?.scrollWidth - scrollContainerRef.current?.clientWidth)* 100).toFixed(0));
    };

    const [startX, setStartX] = useState(0);
    const [grabbing, setGrabbing] = useState(false);

    const handleMouseDown = ({ clientX }) => {
        setStartX(clientX);
        setGrabbing(true);
    };

    const handleMouseLeave = () => setGrabbing(false);

    const handleMouseUp = () => setGrabbing(false);

    const handleMouseMove = ({ clientX }) => {
        if(grabbing) {
            const diff = clientX - startX;
            scrollContainerRef.current.scrollLeft -= (diff);
        }
    };

    const handleClickToScroll = () => {
        // scroll 20% of total scrollbar width
        scrollContainerRef.current.scrollLeft += (scrollContainerRef.current?.scrollWidth * 0.2);
    };

    return (
        <>
            <div className={`w-full h-[80vh] md:h-screen flex items-center p-4 md:p-16 relative`}>
                <button className={`${expanded ? 'block' : 'hidden'} absolute right-0`} onClick={handleClickToScroll}>
                    {">"}
                </button>
                {
                    expanded &&
                    <div className="w-4/12 h-2 max-md:w-1/2 max-md:top-16 rounded-full absolute top-0 mx-auto left-0 right-0">
                        <div className="w-full h-full rounded-full overflow-clip bg-[#dbdbdb]">
                            <div className="h-full w-0 rounded-full bg-[#808080]" style={{width: `${scrollAmount}%`}}>

                            </div>
                        </div>
                    </div>
                }
                <button className={`w-8 h-8 absolute top-0 rounded-full right-16 max-md:right-2 ${expanded ? 'block' : 'hidden'}`} onClick={handleToggle}>
                    X
                </button>
                <div
                    className={`w-fit min-h-fit flex items-center no-scroll scroll-smooth overflow-auto ${grabbing ? 'cursor-grabbing' : 'cursor-grab'} ${expanded ? 'gap-x-16 max-md:h-[100vw] md:h-initial' : 'w-full h-full items-center'}`}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    ref={scrollContainerRef}
                >
                    <div className={`bg-[#808080] relative transition-[width,height] items-center duration-[2s] ease-in-out shrink-0 ${expanded ? 'max-md:h-[100vw] md:w-[36vw] aspect-[4/5]' : 'w-[95%] md:w-3/5 aspect-[4/5] lg:aspect-[3/2]'}`}>
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
                    <div className={`bg-[#808080] hidden md:block ${expanded ? 'h-[45vw] aspect-[4/5]' : 'w-[35%] aspect-[4/5]'}`}>

                    </div>
                    {
                        expanded &&
                        <>
                            <div className={`max-md:h-[100vw] md:w-[36vw] aspect-[4/5] shrink-0 bg-[#808080]`}>

                            </div>
                            <div className={`max-md:h-[100vw] md:w-[36vw] aspect-[4/5] shrink-0 bg-[#808080]`}>

                            </div>
                            <div className={`max-md:h-[100vw] md:w-[36vw] aspect-[4/5] shrink-0 bg-[#808080]`}>

                            </div>
                            <div className={`max-md:h-[100vw] md:w-[36vw] aspect-[4/5] shrink-0 bg-[#808080]`}>

                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default LookbookSection;
