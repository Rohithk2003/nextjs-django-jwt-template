import React from "react";
import Image from "next/image";
export default function AboutUs() {
	return (
		<section className="py-14 w-full h-full ">
			<div className="max-w-screen-2xl grid md:grid-cols-2  grid-cols-1 mx-auto px-4 gap-10 text-gray-600 md:px-8">
				<div className="w-full flex justify-end lg:pr-20">
					<div className="size-96 bg-gray-300 overflow-hidden">
						<Image
							src="/aboutus/aboutus.png"
							alt="logo"
							className="w-full h-full object-cover object-center"
							width={2000}
							height={2000}
						/>
					</div>
				</div>
				<div className="w-full flex-col gap-5 flex justify-start ">
					<div className="w-full flex flex-col gap-5">
						<h1 className="text-3xl font-bold text-primary md:text-4xl">
							About Us
						</h1>
						<hr className="w-32 h-1 bg-yellow-400"></hr>
					</div>
					<p className="w-full text-justify text-lg">
						Unique Auditing & Tax Consultancy LLC, is your premier destination
						for comprehensive financial services. Based on a foundation of
						professionalism and expertise, our firm is committed to delivering
						exceptional auditing, accounting, taxation, and business consultancy
						services. We understand the complexities of financial management and
						compliance in today&apos;s dynamic business environment, and our
						goal is to help you navigate these challenges with confidence and
						precision.
					</p>
				</div>
			</div>
		</section>
	);
}
