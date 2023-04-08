import React, { useEffect, useRef, useState } from "react";

function LookbookSection() {
    const sectionContainer = useRef(null);

    const [expanded, setExpanded] = useState(false);

    const [idx, setIdx] = useState(1);
    const maxImgs = 4;

    const disabledBtn = 'bg-[#79797950]';
    const enabledBtn = 'bg-[#00000050]';

    
    const handlePrev = () => {
      setIdx(idx => idx-1);
      //use transition
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

    const handleClickToScrollRight = () => {
        // scroll 20% of total scrollbar width
        scrollContainerRef.current.scrollLeft += (scrollContainerRef.current?.scrollWidth * 0.2);
    };

    const handleClickToScrollLeft = () => {
        scrollContainerRef.current.scrollLeft -= (scrollContainerRef.current?.scrollWidth * 0.2);
    };

    useEffect(() => {
        if(expanded) sectionContainer.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [expanded]);

    const handleToggle = () => {
        setIdx(idx => idx+1);
        //use transition
        setExpanded(!expanded);
        setGrabbing(false);
        setScrollAmount(0);
        setStartX(0);
    };

    const handleClose = () => {
        setScrollAmount(0);
        setStartX(0);
        scrollContainerRef.current.scrollTo({left: 0, behavior: 'smooth'});
        const isDoneScrolling = new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                if(scrollContainerRef.current.scrollLeft === 0) {
                    resolve(() => {
                        setExpanded(false);
                        clearInterval(interval);
                    });
                }
            }, 150);
        });

        isDoneScrolling.then((resolve) => resolve());
    };
    return (
        <>
            {/* <button onClick={test2}>Close</button> */}
            <div className={`w-full h-[80vh] md:h-screen flex items-center p-4 md:p-16 relative scroll-m-24`} ref={sectionContainer}>
                <button className={`${expanded ? 'block' : 'hidden'} absolute right-0`} onClick={handleClickToScrollRight}>
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
                <button className={`w-8 h-8 absolute top-0 rounded-full right-16 max-md:right-2 ${expanded ? 'block' : 'hidden'}`} onClick={handleClose}>
                    X
                </button>
                {/* Lookbook Divs Container */}
                <div
                    className={`w-fit min-h-fit flex items-center no-scroll scroll-smooth gap-x-[5%] ${expanded ? 'overflow-auto' : 'overflow-clip'} transition[gap,width,height] duration-[2s] ${grabbing ? 'cursor-grabbing' : 'cursor-grab'} ${expanded ? ' max-md:h-[100vw] md:h-initial' : 'w-full h-full items-center'}`}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    ref={scrollContainerRef}
                >
                    {/* Click Edge To Scroll */}
                    <div
                        className={`w-32 h-4/5 absolute left-0 my-auto top-0 bottom-0 cursor-pointer ${expanded ? 'block' : 'hidden'}`}
                        onClick={handleClickToScrollLeft}
                    ></div>
                    <div
                        className={`w-32 h-4/5 absolute right-0 my-auto top-0 bottom-0 cursor-pointer ${expanded ? 'block' : 'hidden'}`}
                        onClick={handleClickToScrollRight}
                    ></div>
                    {/* First Lookbook Div */}
                    <div className={`bg-[#808080] relative items-center transition-[width,height] duration-[2s] ease-in-out shrink-0 ${expanded ? 'max-md:h-[100vw] md:w-[36vw] aspect-[4/5]' : 'w-[95%] md:w-3/5 aspect-[4/5] lg:aspect-[3/2]'}`}>
                        <img src="" alt="" />
                        <button
                            className={`w-12 aspect-square rounded-full ${idx === maxImgs ? disabledBtn : enabledBtn} absolute right-8 my-auto bottom-0 top-0 ${expanded ? 'hidden' : 'block'}`}
                            disabled={idx === maxImgs}
                            onClick={handleToggle}
                        >
                            {">"}
                        </button>
                    </div>
                    {/* <div className={`w-[5%] h-full flex-shrink-0 ${expanded ? 'hidden' : 'block'}`}>

                    </div> */}
                    {/* 2nd Lookbook Div */}
                    <div
                        className={`bg-[#808080] aspect-[4/5] transition-[height,width] ease-in-out duration-[2s] flex-shrink-0 h-[45vw] ${expanded ? 'mr-0' : ''}`}
                        onClick={() => {if(!expanded) setExpanded(true)}}
                    >
                    </div>
                    {/* Rest Of Lookbook Divs */}
                    {
                        
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
