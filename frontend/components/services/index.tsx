"use client";
import React from "react";
import { AiOutlineAudit } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { CiCalculator2 } from "react-icons/ci";
import { IoBusiness } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

export default function Services() {
	const { ref: service1Ref, inView: service1Visible } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const { ref: service2Ref, inView: service2Visible } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const { ref: service3Ref, inView: service3Visible } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const { ref: service4Ref, inView: service4Visible } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<section className="bg-white min-h-[60vh]">
			<div className="container px-6 py-10 mx-auto">
				<div className="w-full flex flex-col gap-5">
					<h1 className="text-3xl font-bold text-primary md:text-4xl">
						Our Services
					</h1>
					<hr className="w-32 h-1 bg-yellow-400"></hr>
				</div>

				<div className="flex flex-row justify-center items-center h-full  gap-8 mt-8 xl:mt-12 xl:gap-16 ">
					<div
						ref={service1Ref}
						className={`space-y-1 border hover:bg-primary hover:text-white text-primary p-4  h-60  rounded-lg  transition-all ease-in-out duration-300 ${
							service1Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<AiOutlineAudit />
						</span>
						<h1 className="text-xl font-semibold  capitalize">
							Auditing Services
						</h1>
						<p className="text-gray-500 text-sm">
							We provide thorough and independent audits of your financial
							statements to ensure accuracy and compliance. Our team delivers
							reliable results for internal, statutory, or forensic audits,
							helping you improve your financial health.
						</p>
					</div>
					<div
						ref={service2Ref}
						className={`space-y-1 p-4  h-60  border rounded-lg hover:bg-primary hover:text-white text-black  transition-all ease-in-out duration-300 ${
							service2Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<CiMoneyBill />
						</span>
						<h1 className="text-xl font-semibold capitalize">
							Taxation Services
						</h1>
						<p className="text-gray-500 text-sm">
							We guide you through tax complexities, offering planning and
							filing services that ensure compliance and minimize liabilities.
							Let us optimize your tax position, giving you peace of mind.
						</p>
					</div>

					<div
						ref={service3Ref}
						className={`space-y-1 p-4  h-60  border rounded-lg hover:bg-primary hover:text-white text-black  transition-all ease-in-out duration-300 ${
							service3Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-full">
							<CiCalculator2 />
						</span>
						<h1 className="text-xl font-semibold capitalize">
							Accounting & Bookkeeping Services
						</h1>
						<p className="text-gray-500 text-sm">
							We offer accurate accounting and bookkeeping services, providing
							real-time financial data and reports. Stay compliant and make
							informed decisions with our comprehensive support.
						</p>
					</div>

					<div
						ref={service4Ref}
						className={`space-y-1 p-4 h-60  border rounded-lg hover:bg-primary hover:text-white text-black   transition-all ease-in-out duration-300 ${
							service4Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<IoBusiness />
						</span>
						<h1 className="text-xl font-semibold capitalize">
							Business Consultancy
						</h1>
						<p className="text-gray-500 text-sm">
							We help you achieve your business goals with strategic planning
							and operational efficiency. Our consultancy services identify
							growth opportunities and streamline processes to drive success.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
