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
import useWindowSize from "../hooks/useWindowsSize"

export default function Carousel() {
    const cakesData = useSelector((state) => state.products);
    // eslint-disable-next-line no-unused-vars
    const [shuffled, setShuffled] = useState([])
    const { widthforCarousel } = useWindowSize()

    const slideHTML = shuffled.map((item, i) => {
        return (
            <Slide key={item.name} index={i}>
                <Image className="carousel-img" src={item.img_url} />
            </Slide>
        );
    });

    useEffect(() => {
        setShuffled(() => [...cakesData].sort(() => 0.5 - Math.random()).slice(0, 6))
    },[cakesData])

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={shuffled.length}
            visibleSlides={widthforCarousel > 420 ? 3 : 1}
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
