import { ReactElement, useEffect, useRef, useState } from "react";
import "./HorizonSlider.scss";

export function HorizonSlider({ children }: {children: ReactElement}) {
    const sliderItem = useRef<HTMLDivElement>(null);
    const sliderWrapItem = useRef<HTMLDivElement>(null);
    const [sliderWrap, setSliderWrap] = useState(0);

    function fixResizeSlider() {
        if (sliderItem.current !== null && sliderWrapItem.current?.lastElementChild) {
            const sliderWidth = sliderItem.current.offsetWidth;
            const sliderWrap =  sliderWrapItem.current.lastElementChild.getBoundingClientRect().left + sliderWrapItem.current.lastElementChild.getBoundingClientRect().width;

            if (sliderWidth > sliderWrap) {
                setSliderWrap(sliderWrap + (sliderWidth - sliderWrap))
            }
        }
    }

    function moveSlide(scroll: number) {
        if (sliderItem.current !== null && sliderWrapItem.current !== null){
            const maxScroll = sliderItem.current.offsetWidth - sliderWrapItem.current.scrollWidth;
            let resulMarginLeft = sliderWrap + scroll;
    
            if (resulMarginLeft > 0) {
                resulMarginLeft = 0;
            }
        
            if (resulMarginLeft < maxScroll) {
                resulMarginLeft = maxScroll;
            }

            setSliderWrap(resulMarginLeft);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => fixResizeSlider());

        return () => {
            window.removeEventListener('resize', () => fixResizeSlider());
        }

    }, []);

    return (
        <div
            ref={ sliderItem }
            className="slider"
        >
            <div
                className="sliderWrap"
                style={ {marginLeft: `${sliderWrap}px`} }
                ref={sliderWrapItem}
            >
                { children }
            </div>

            <div
                className="slider-prev slider-btn"
                onClick={() => moveSlide(150)}
            >
                {'>'}
            </div>
            <div
                onClick={() => moveSlide(-150)} 
                className="slider-next slider-btn"
            >
                {'>'}
            </div>
        </div>
    )
}
