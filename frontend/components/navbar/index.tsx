"use client";
import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";
import { CiMail, CiPhone } from "react-icons/ci";
import Image from "next/image";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about-us",
	},
	{
		name: "Services",
		href: "/services",
	},
	{
		name: "Contact Us",
		href: "/contact",
	},
];
export default function Navbar() {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<nav className="w-full border-b h-20 font-poppins shadow-xl  bg-navbar flex flex-row justify-between items-center ">
				<div className="flex flex-row justify-between items-center w-full mx-5 ">
					<div className="flex sm:p-0 p-5 flex-row justify-start gap-3 w-full items-center container mx-10">
						<div>
							{/* <Image
								src="/aboutus/aboutus.png"
								alt="logo"
								width={100}
								height={100}
							/> */}
						</div>
						<ul className="lg:flex hidden flex-row items-center gap-6 font-poppins">
							{links.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-[17px] font-poppins "
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<div
							onClick={() => {
								setOpened(!opened);
							}}
							className={classNames(`tham lg:hidden tham-e-squeeze tham-w-6`, {
								"tham-active": opened,
							})}
						>
							<div className="tham-box">
								<div className="tham-inner" />
							</div>
						</div>
					</div>
					<ul className="flex flex-row w-full justify-end items-center gap-5">
						<li className="flex flex-row items-center gap-2">
							<CiMail size={20} />
							<a href="mailto:uniqueauditing@gmail.com">
								uniqueauditing@gmail.com
							</a>
						</li>
						<li className="flex flex-row items-center gap-2">
							<CiPhone size={20} />
							<a href="tel:+971568303575">+971 56 830 3575</a>
						</li>
						<li>
							<button className="bg-primary hover:bg-primary/80 transition-all duration-300 ease-in-out text-white  px-6 font-bold py-2 rounded-md">
								Book Consultation
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<aside
				className={classNames(
					`fixed top-0 left-0 w-1/2 py-20 h-full bg-white z-50 transition-all duration-300`,
					{
						"translate-x-0": opened,
						"-translate-x-full": !opened,
					}
				)}
			>
				<ul className="flex flex-col items-start p-5 gap-10">
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
}
