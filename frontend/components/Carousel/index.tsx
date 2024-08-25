"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { blog } from "@/types/types";
import BlogCard from "../BlogCard";
const Carousel = ({ slides }: { slides: blog[] }) => {
	const [oldSlide, setOldSlide] = useState(0);
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeSlide2, setActiveSlide2] = useState(0);

	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		arrows: true,
		slidesToShow: 3,
		lazyLoad: "progressive" as any,
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
		<div className="relative  w-screen  n">
			<Slider
				{...settings}
				ref={slider}
				className=" relative z-20 h-max w-full "
			>
				{slides.map((blog: blog, index: number) => {
					return (
						<BlogCard
							key={index}
							title={blog.title}
							content={blog.content}
							image={blog.image}
							date={blog.created_at}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default Carousel;
