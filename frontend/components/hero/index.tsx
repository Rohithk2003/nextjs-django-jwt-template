import React from "react";
import "./hero.css";
import Carousel from "../Carousel";
const slides = [
	{
		image: "/hero/1.jpg",
		alt: "Slide 1",
	},
	{
		image: "/hero/2.jpg",
		alt: "Slide 2",
	},
	{
		image: "/hero/3.jpg",
		alt: "Slide 3",
	},
	{
		image: "/hero/4.jpg",
		alt: "Slide 4",
	},
];
const Hero = () => {
	return (
		<div className="relative  border-0 h-screen overflow-hidden max-w-screen  bg-white">
			<div className="flex justify-center border-0   items-center  w-full h-full z-[51] ">
				<Carousel slides={slides} />

				<div
					className={`absolute z-[998]  flex-col gap-7 px-6 lg:px-20 lg:text-start text-center scroll-smooth left-0 top-0 h-full lg:w-1/2 flex justify-center items-center lg:items-start p-5 text-white`}
				>
					<span className="text-blue-300  text-3xl sm:text-5xl xl:text-7xl">
						Unique Auditing & Tax Consultancy LLC
					</span>
					<span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-start">
						Empowering Your Business with Expert Auditing & Financial Services.
					</span>
					<div className="flex flex-row gap-4 justify-center lg:justify-start w-full">
						<button className="bg-primary text-white p-3 sm:p-4 md:p-5 rounded-full hover:underline">
							Book a Call
						</button>
						<button className="bg-transparent border text-white p-3 sm:p-4 md:p-5 rounded-full hover:underline">
							Popular Services
						</button>
					</div>
				</div>
			</div>
			<div className="wavy-line border-0 absolute bg-black w-full bottom-0 h-full z-[1000]"></div>
		</div>
	);
};

export default Hero;
