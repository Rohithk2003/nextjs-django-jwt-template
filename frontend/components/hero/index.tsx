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
];
const Hero = () => {
	return (
		<div className="relative h-max w-screen bg-white">
			<div className="shape w-full absolute z-[100] -bottom-28 h-44 "></div>

			<div className="flex justify-center items-center relative w-full h-full z-[51] ">
				<Carousel slides={slides} />

				<div
					className={`absolute  z-[998] gap-4 px-20 flex-col myDiv scroll-smooth  mr-10 left-0 top-0 h-full w-1/3 flex justify-center items-center p-5  text-white text-start   text-4xl `}
				>
					<span className="text-blue-300">
						Unique Auditing & Tax Consultancy LLC
					</span>
					<span className="text-lg">
						Empowering Your Business with Expert Auditing & Financial Services.
					</span>
					<div className="flex flex-row text-lg gap-5 justify-start w-full">
						<button className="bg-primary text-white p-5 rounded-full hover:underline">
							Book a Call
						</button>
						<button className="bg-transparent border  text-white p-5 rounded-full hover:underline">
							Popular Services
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
