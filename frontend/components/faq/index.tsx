"use client";
import React from "react";
import { useRef, useState } from "react";
import { FaQ } from "react-icons/fa6";

const FaqsCard = (props: {
	faqsList: {
		q: string;
		a: string;
	};
	idx: number;
}) => {
	const answerElRef = useRef(null);
	const [state, setState] = useState(false);
	const [answerH, setAnswerH] = useState("0px");
	const { faqsList, idx } = props;

	const handleOpenAnswer = () => {
		if (answerElRef.current) {
			const el = answerElRef.current as any;
			const answerElH = el.childNodes[0].offsetHeight;
			setState(!state);
			setAnswerH(`${answerElH + 20}px`);
		}
	};

	return (
		<div
			className="space-y-3 mt-5 overflow-hidden border-b"
			key={idx}
			onClick={handleOpenAnswer}
		>
			<h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
				{faqsList.q}
				{state ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-500 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20 12H4"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-500 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 4v16m8-8H4"
						/>
					</svg>
				)}
			</h4>
			<div
				ref={answerElRef}
				className="duration-300"
				style={state ? { height: answerH } : { height: "0px" }}
			>
				<div>
					<p className="text-gray-500">{faqsList.a}</p>
				</div>
			</div>
		</div>
	);
};

export default function FAQ() {
	const faqsList = [
		{
			q: "What services does your firm offer?",
			a: "We offer a comprehensive range of services, including auditing, tax consultancy, financial advisory, and risk management. Our services are tailored to meet the specific needs of our clients.",
		},
		{
			q: "How can I schedule a consultation?",
			a: "You can schedule a consultation by filling out the contact form on our website or by calling our office directly. Our team will get back to you promptly to arrange a convenient time.",
		},
		{
			q: "What industries do you specialize in?",
			a: "We have experience working with clients across various industries, including healthcare, real estate, manufacturing, technology, and financial services. Our team has the expertise to handle industry-specific challenges.",
		},
		{
			q: "How do you ensure confidentiality of my financial information?",
			a: "We take confidentiality very seriously. All client information is stored securely and is only accessible by authorized personnel. We comply with all relevant data protection regulations to ensure your information remains private.",
		},
		{
			q: "What are your fees for tax consultancy services?",
			a: "Our fees are based on the complexity of the work involved and the scope of services required. We offer competitive rates and can provide a detailed quote after an initial consultation to understand your needs.",
		},
	];

	return (
		<section className="leading-relaxed max-w-screen-3xl min-h-[80vh] mt-12 mx-auto px-4 md:px-8">
			<div className="space-y-3 text-center ">
				<h1 className="text-3xl text-gray-800 font-semibold">
					Frequently Asked Questions
				</h1>
				<p className="text-gray-600 max-w-lg mx-auto text-lg">
					Answered all frequently asked questions, Still confused? feel free to
					contact us.
				</p>
			</div>
			<div className="mt-14 max-w-5xl mx-auto">
				{faqsList.map((item, idx) => (
					<FaqsCard
						idx={idx}
						key={idx}
						faqsList={item}
					/>
				))}
			</div>
		</section>
	);
}
