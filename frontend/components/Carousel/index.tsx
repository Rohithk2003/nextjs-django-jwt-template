"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Carousel = ({
	slides,
}: {
	slides: {
		image: string;
		alt: string;
	}[];
}) => {
	const [oldSlide, setOldSlide] = useState(0);
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeSlide2, setActiveSlide2] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		speed: 3000,
		arrows: true,
		slidesToShow: 1,
		lazyLoad: "progressive" as any,
		fade: true,
		slidesToScroll: 1,
		autoplay: true,
		centerPadding: "0",
		className: "slider variable-width",
		centerMode: true,
		pauseOnHover: false,
		autoplaySpeed: 3000,
		adaptiveHeight: true, // Adjusts slide height to the content
		beforeChange: (current: any, next: any) => {
			setOldSlide(current);
			setActiveSlide(next);
		},
		afterChange: (current: any) => setActiveSlide2(current),
		responsive: [
			{
				breakpoint: 768, // Mobile breakpoint (change as needed)
				settings: {
					centerMode: false, // Disable centerMode for mobile view
				},
			},
		],
	};

	const slider: any = useRef();

	return (
		<div className="relative h-[100vh] w-screen  n">
			<div className="absolute bg-black opacity-70 z-[21] w-full h-full"></div>
			<Slider
				{...settings}
				ref={slider}
				className=" md:h-screen relative z-20 h-max w-full "
			>
				{slides.map(
					(
						slide: {
							image: string;
							alt: string;
						},
						index: number
					) => {
						return (
							<div
								key={index}
								className="w-full h-full "
							>
								<Image
									src={slide.image}
									data-index={index}
									priority={true}
									alt={`slide ${index}`}
									className=" object-top w-full  object-cover min-h-screen bg-center "
									style={{
										animation:
											activeSlide === index
												? " zoom-in 15s ease-in-out infinite"
												: "",
									}}
									width={2000}
									height={2000}
								/>
							</div>
						);
					}
				)}
			</Slider>
		</div>
	);
};

export default Carousel;
