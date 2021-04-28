import React, {useState, useEffect} from 'react';
import './style.css';
import firstSlide from './Img/1.jpg';
import secondSlide from './Img/2.jpg';
import thirdSlide from './Img/3.jpg';



const SliderAutoPlay = () => {
    const images = [
        <img key={firstSlide} src={firstSlide} alt={'firstSlide'}/>,
        <img key={secondSlide} src={secondSlide} alt={'secondSlide'}/>,
        <img key={thirdSlide} src={thirdSlide} alt={'thirdSlide'}/>
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setActiveIndex( (current) =>
                current === images.length - 1 ? 0 : current + 1
            )}, 3000)
        return () => clearInterval()
    }, [images.length]);
    const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
    const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    return (
        <div className='slider'>
            <div className='slider-image slider-image-prev'
                 key={prevImageIndex}>
                {images[prevImageIndex]}
            </div>
            <div className='slider-image'
                 key={activeIndex}>
                {images[activeIndex]}
            </div>
            <div className='slider-image slider-image-next'
                 key={nextImageIndex}>
                {images[nextImageIndex]}
            </div>
        </div>
    )
}
export default SliderAutoPlay;