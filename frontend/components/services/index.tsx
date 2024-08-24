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
		<section className="bg-white">
			<div className="container px-6 py-10 mx-auto">
				<div className="w-full flex flex-col gap-5">
					<h1 className="text-3xl font-bold text-primary md:text-4xl">
						Our Services
					</h1>
					<hr className="w-32 h-1 bg-yellow-400"></hr>
				</div>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
					<div
						ref={service1Ref}
						className={`space-y-3 border p-4 rounded-lg transition-transform duration-700 ${
							service1Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<AiOutlineAudit />
						</span>
						<h1 className="text-xl font-semibold text-gray-700 capitalize">
							Auditing Services
						</h1>
						<p className="text-gray-500">
							We provide thorough and independent audits of your financial
							statements to ensure accuracy and compliance. Our team delivers
							reliable results for internal, statutory, or forensic audits,
							helping you improve your financial health.
						</p>
						<a
							href="#"
							className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
						>
							<span className="mx-1">read more</span>
							<svg
								className="w-4 h-4 mx-1 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>

					<div
						ref={service2Ref}
						className={`space-y-3 border p-4 rounded-lg transition-transform duration-700 ${
							service2Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<CiMoneyBill />
						</span>
						<h1 className="text-xl font-semibold text-gray-700 capitalize">
							Taxation Services
						</h1>
						<p className="text-gray-500">
							We guide you through tax complexities, offering planning and
							filing services that ensure compliance and minimize liabilities.
							Let us optimize your tax position, giving you peace of mind.
						</p>
						<a
							href="#"
							className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
						>
							<span className="mx-1">read more</span>
							<svg
								className="w-4 h-4 mx-1 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>

					<div
						ref={service3Ref}
						className={`space-y-3 border p-4 rounded-lg transition-transform duration-700 ${
							service3Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<CiCalculator2 />
						</span>
						<h1 className="text-xl font-semibold text-gray-700 capitalize">
							Accounting & Bookkeeping Services
						</h1>
						<p className="text-gray-500">
							We offer accurate accounting and bookkeeping services, providing
							real-time financial data and reports. Stay compliant and make
							informed decisions with our comprehensive support.
						</p>
						<a
							href="#"
							className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
						>
							<span className="mx-1">read more</span>
							<svg
								className="w-4 h-4 mx-1 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>

					<div
						ref={service4Ref}
						className={`space-y-3 border p-4 rounded-lg transition-transform duration-700 ${
							service4Visible
								? "translate-y-0 opacity-1"
								: "translate-y-[10%] md:translate-y-[40%] opacity-0"
						}`}
					>
						<span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
							<IoBusiness />
						</span>
						<h1 className="text-xl font-semibold text-gray-700 capitalize">
							Business Consultancy
						</h1>
						<p className="text-gray-500">
							We help you achieve your business goals with strategic planning
							and operational efficiency. Our consultancy services identify
							growth opportunities and streamline processes to drive success.
						</p>
						<a
							href="#"
							className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
						>
							<span className="mx-1">read more</span>
							<svg
								className="w-4 h-4 mx-1 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
