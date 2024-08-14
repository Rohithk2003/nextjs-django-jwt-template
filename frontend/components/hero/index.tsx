import React from "react";
import "./hero.css";

const Hero = () => {
	return (
		<div className="flex justify-center items-center relative">
			<video
				src={"/videos/hero.mp4"}
				autoPlay
				playsInline
				loop
				muted
				className="w-full h-full object-cover z-[-1] absolute"
			/>
			<div className="hero w-[100vw] ">
				<div className="flex flex-col font-roboto font-bold justify-center items-center font-SairaSencil container  w-full ">
					<p className=" text-6xl  text-center max-w-2xl leading-normal text-[40px]">
						Unique Auditing & Tax Consultancy LLC
					</p>
					<button className="bg-transparent border hover:bg-white transition-all duration-300 ease-in-out hover:text-black text-white px-4 py-2 rounded-md">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
