import React from "react";
import Image from "next/image";
const Hero = () => {
	return (
		<div className=" relative font-poppins  border-0 min-h-screen overflow-hidden max-w-screen  bg-white">
			<div className="relative hidden lg:block h-full">
				<div className="4xl:size-[800px] 3xl:size-[700px] 2xl:size-[600px] xl:size-[550px] bg-primary rounded-full bottom-0 lg:right-0 2xl:right-0 xl:-right-5 3xl:-right-10 4xl:-right-10 absolute z-[0]"></div>
				<Image
					src="/hero/main.png"
					objectFit="cover"
					width={1000}
					height={1000}
					alt="Hero Image"
					className="w-full h-full  relative object-contain   bg-transparent z-[1]"
				/>
			</div>
			<div className="lg:hidden block relative">
				<Image
					src="/hero/2.jpg"
					alt="Hero Image"
					width={1000}
					height={1000}
					className="absolute z-[0] h-screen object-cover object-center"
				/>
			</div>
			<div className="bg-black lg:hidden flex absolute w-full h-full z-1 opacity-50"></div>
			<div className="absolute flex justify-center lg:text-black text-white  items-center lg:items-start 2xl:mt-0 lg:mt-28 2xl:items-center z-50 top-0 h-full left-0 w-full lg:w-2/3 ">
				<div className="flex flex-col justify-start gap-10 items-center lg:items-start p-2 max-w-6xl">
					<p className="2xl:text-7xl lg:text-6xl text-3xl md:text-6xl lg:text-start text-center   leading-[1.7] 2xl:leading-normal  font-[600]">
						Empowering your Business with Expert Auditing & Financial Services.
					</p>
					<div className="relative   md:text-xl xl:text-3xl w-2/3 h-16">
						<div className="bg-[#f7efd2] test p-5 h-full"></div>
						<p className="absolute top-2 md:top-4 font-bold  w-full text-black text-center h-full">
							Unique Auditing & Tax Consultancy LLC
						</p>
					</div>
					<button className="px-6 py-2 text-center hover:bg-white hover:text-black hover:cursor-pointer transition-all ease-in-out duration-300 bg-primary text-white rounded-xl text-xl">
						Get a free consultation
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
