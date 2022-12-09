import React, { useEffect, useState } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    Image,
    DotGroup,
} from "pure-react-carousel";
import { useSelector } from "react-redux";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/carousel.css";

export default function Carousel() {
    const cakesData = useSelector((state) => state.products);
    // eslint-disable-next-line no-unused-vars
    const [shuffled, setShuffled] = useState([])


    const slideHTML = shuffled.map((item, i) => {
        return (
            <Slide key={item.title} index={i}>
                <Image className="carousel-img" src={`../images/${item.imgName}.jpg`} />
            </Slide>
        );
    });

    useEffect(() => {
        setShuffled(() => [...cakesData].sort(() => 0.5 - Math.random()).slice(0, 6))
    },[cakesData])

    return (
        <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={250}
            totalSlides={shuffled.length}
            visibleSlides={3}
            step={1}
            currentSlide={1}
            infinite={true}
            isPlaying={true}
        >
            <Slider>{slideHTML}</Slider>
            <DotGroup />
        </CarouselProvider>
    );
}
