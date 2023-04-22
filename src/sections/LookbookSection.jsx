import React, { useEffect, useRef, useState } from "react";

function LookbookSection() {
    const sectionContainer = useRef(null);

    const [expanded, setExpanded] = useState(false);

    const [idx, setIdx] = useState(1);
    const maxImgs = 4;

    const disabledBtn = "bg-[#79797950]";
    const enabledBtn = "bg-[#00000050]";

    const handlePrev = () => {
        setIdx((idx) => idx - 1);
        //use transition
    };

    const [startX, setStartX] = useState(0);

    const scrollContainerRef = useRef(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const [grabbing, setGrabbing] = useState(false);

    const [distanceScrolled, setDistanceScrolled] = useState(0);

    const handleClickToScrollRight = () => {
        // scroll 20% of total scrollbar width
        const distanceToScroll = (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.offsetWidth) * 0.2;
        setDistanceScrolled(distanceToScroll);
        scrollLoop();
    };

    const handleClickToScrollLeft = () => {
        const distanceToScroll = (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.offsetWidth) * 0.2;
        setDistanceScrolled(-1*distanceToScroll);
        scrollLoop();
    };

    const handleMouseDown = ({ clientX, pageX }) => {
        setGrabbing(true);
        setStartX(clientX); //pageX - slider.offsetLeft
    };

    const handleMouseMove = ({ clientX }) => {
        if(grabbing) {
            const diff = startX - clientX;
            setDistanceScrolled(diff);
            const distanceToScroll = scrollContainerRef.current.scrollLeft + diff * 0.15;
            scrollContainerRef.current.scrollTo({ 'left': distanceToScroll, behaviour: 'smooth' })
        }
    };

    const handleMouseLeave = () => {
        setGrabbing(false);
    };

    const handleWheel = () => {

    };

    const handleMouseUp = () => {
        setGrabbing(false);
        scrollLoop();
    };

    const scrollLoop = () => {
        let velX = Math.abs(distanceScrolled);
        while(velX > 0.6) {
            velX *= 0.85;
            const distanceToScroll = scrollContainerRef.current.scrollLeft + (Math.sign(distanceScrolled) * velX*400);

            scrollContainerRef.current.scrollTo({ left: distanceToScroll, behavior: 'smooth' });
        }

        setScrollPercentage(scrollContainerRef.current.scrollLeft / (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.offsetWidth) * 100);
    };

    useEffect(() => {
        if (expanded)
            sectionContainer.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    }, [expanded]);

    const handleToggle = () => {
        setIdx((idx) => idx + 1);
        //use transition
        setExpanded(!expanded);
        setGrabbing(false);
        setScrollPercentage(0);
    };

    const handleClose = () => {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        const isDoneScrolling = new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                if (scrollContainerRef.current.scrollLeft === 0) {
                    resolve(() => {
                        setExpanded(false);
                        clearInterval(interval);
                    });
                }
            }, 0);
        });

        isDoneScrolling.then((resolve) => resolve());
    };

    return (
        <>
            <div
                className={`w-full h-[80vh] md:h-screen flex items-center p-4 md:p-16 relative scroll-m-24`}
                ref={sectionContainer}
            >
                {/* Scrollbar Progress */}
                {
                    expanded &&
                    <div className="w-4/12 h-2 max-md:w-3/5 max-md:top-4 rounded-full absolute md:top-3 mx-auto left-0 right-0">
                        <div className="w-full h-full rounded-full overflow-clip bg-[#dbdbdb]">
                            <div className="h-full w-0 rounded-full bg-[#808080] transition-[width] duration-[.5s]" style={{width: `${scrollPercentage}%`}}>

                            </div>
                        </div>
                    </div>
                }
                <div className={`w-8 h-8 absolute top-0 rounded-full right-16 max-md:right-2 cursor-pointer flex items-center justify-center ${expanded ? 'block' : 'hidden'}`} onClick={handleClose}>
                    <img src="cross.png" alt="" className="w-1/2 h-1/2 object-contain center" />
                </div>
                {/* Lookbook Divs Container */}
                <div
                    className={`w-fit min-h-fit h-4/5 flex items-center gap-x-[5%] no-scroll no-select ${expanded ? 'overflow-auto' : 'overflow-clip'} transition[gap,width,height] duration-[2s] ${grabbing ? 'cursor-grabbing' : 'cursor-grab'} ${expanded ? ' max-md:h-[100vw] md:h-initial' : 'w-full h-full items-center'}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onWheel={handleWheel}
                    ref={scrollContainerRef}
                >
                    {/* Click Edge To Scroll */}
                    <div
                        className={`w-32 h-4/5 absolute left-0 my-auto top-0 bottom-0 cursor-pointer max-md:hidden ${expanded ? 'block' : 'hidden'}`}
                        onClick={handleClickToScrollLeft}
                    ></div>
                    <div
                        className={`w-32 h-4/5 absolute right-0 my-auto top-0 bottom-0 cursor-pointer max-md:hidden ${expanded ? 'block' : 'hidden'}`}
                        onClick={handleClickToScrollRight}
                    ></div>
                    {/* First Lookbook Div */}
                    <div className={`flex flex-col relative items-center transition-[width,height,aspect-ratio] duration-[2s] ease-in-out shrink-0 ${expanded ? 'w-[64vw] md:w-[36vw] aspect-[4/5] lg:w-[30vw]' : 'w-[70%] md:w-3/5 aspect-[4/5] lg:aspect-[3/2]'}`}>
                        <div className={`w-full ${expanded ? 'h-[85%]' : 'h-full'}`}>
                            <img src="/lookbook/0/0.jpg" alt="" className="w-full h-full object-cover object-center" draggable={false} />
                        </div>
                        <div className={`w-full pt-2 text-black transition-[height] duration-[1s] ${expanded ? 'h-[15%]' : 'h-0' }`}>
                            <h1 className="text-2xl font-bold">Lookbook Title</h1>
                            <span className="text-xs truncate-3-lines">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus doloribus veritatis tempora obcaecati aperiam dicta dolores ab nobis hic. Ipsa voluptatum itaque culpa quisquam cumque perspiciatis quasi a sit.
                            </span>
                        </div>
                        <button
                            className={`w-12 aspect-square rounded-full ${idx === maxImgs ? disabledBtn : enabledBtn} absolute right-8 my-auto bottom-0 top-0 ${expanded ? 'hidden' : 'block'}`}
                            disabled={idx === maxImgs}
                            onClick={handleToggle}
                        >
                            {">"}
                        </button>
                    </div>
                    {/* 2nd Lookbook Div */}
                    <div
                        className={`aspect-[4/5] transition-[height,width] ease-in-out duration-[2s] flex-shrink-0 md:h-[45vw] ${expanded ? 'max-md:w-[64vw] lg:h-[37.5vw]' : 'max-md:w-[36vw]'}`}
                        onClick={() => {if(!expanded) setExpanded(true)}}
                    >
                        <div className={`w-full ${expanded ? 'h-[85%]' : 'h-full'}`}>
                            <img src="/lookbook/0/1.jpg" alt="" className="w-full h-full object-cover object-center" draggable={false} />
                        </div>
                        <div className={`w-full pt-2 text-black transition-[height] duration-[1s] ${expanded ? 'h-[15%]' : 'h-0 hidden' }`}>
                            <h1 className="text-2xl font-bold">Lookbook Title</h1>
                            <span className="text-xs truncate-3-lines">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus doloribus veritatis tempora obcaecati aperiam dicta dolores ab nobis hic. Ipsa voluptatum itaque culpa quisquam cumque perspiciatis quasi a sit.
                            </span>
                        </div>
                    </div>
                    {/* Rest Of Lookbook Divs */}
                    {
                        <>
                            <div className={`max-md:h-[80vw] md:w-[36vw] lg:w-[30vw] aspect-[4/5] shrink-0 flex flex-col`}>
                                <div className={`w-full h-[85%]`}>
                                    <img src="/lookbook/0/2.jpg" alt="" className="w-full h-full object-cover object-center" draggable={false} />
                                </div>
                                <div className={`w-full h-[15%] pt-2 text-black transition-[height] duration-[1s]`}>
                                    <h1 className="text-2xl font-bold">Lookbook Title</h1>
                                    <span className="text-xs truncate-3-lines">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus doloribus veritatis tempora obcaecati aperiam dicta dolores ab nobis hic. Ipsa voluptatum itaque culpa quisquam cumque perspiciatis quasi a sit.
                                    </span>
                                </div>
                            </div>
                            <div className={`max-md:h-[80vw] md:w-[36vw] lg:w-[30vw] aspect-[4/5] shrink-0`}>
                                <div className={`w-full h-[85%]`}>
                                    <img src="/lookbook/0/3.jpg" alt="" className="w-full h-full object-cover object-center" draggable={false} />
                                </div>
                                <div className={`w-full h-[15%] pt-2 text-black transition-[height] duration-[1s]`}>
                                    <h1 className="text-2xl font-bold">Lookbook Title</h1>
                                    <span className="text-xs truncate-3-lines">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus doloribus veritatis tempora obcaecati aperiam dicta dolores ab nobis hic. Ipsa voluptatum itaque culpa quisquam cumque perspiciatis quasi a sit.
                                    </span>
                                </div>
                            </div>
                            <div className={`max-md:h-[80vw] md:w-[36vw] lg:w-[30vw] aspect-[4/5] shrink-0`}>
                                <div className={`w-full h-[85%]`}>
                                    <img src="/lookbook/0/4.jpg" alt="" className="w-full h-full object-cover object-center" draggable={false} />
                                </div>
                                <div className={`w-full h-[15%] pt-2 text-black transition-[height] duration-[1s]`}>
                                    <h1 className="text-2xl font-bold">Lookbook Title</h1>
                                    <span className="text-xs truncate-3-lines">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus doloribus veritatis tempora obcaecati aperiam dicta dolores ab nobis hic. Ipsa voluptatum itaque culpa quisquam cumque perspiciatis quasi a sit.
                                    </span>
                                </div>
                            </div>
                            <div className={`max-md:h-[80vw] md:w-[36vw] lg:w-[30vw] aspect-[4/5] shrink-0`}>
                                <div className={`w-full h-[85%]`}>
                                    <img src="/lookbook/0/5.jpg" alt="" className="w-full h-full object-cover object-center" draggable={false} />
                                </div>
                                <div className={`w-full h-[15%] pt-2 text-black transition-[height] duration-[1s]`}>
                                    <h1 className="text-2xl font-bold">Lookbook Title</h1>
                                    <span className="text-xs truncate-3-lines">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus doloribus veritatis tempora obcaecati aperiam dicta dolores ab nobis hic. Ipsa voluptatum itaque culpa quisquam cumque perspiciatis quasi a sit.
                                    </span>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default LookbookSection;
