"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CiMail, CiPhone } from "react-icons/ci";

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
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = (e: any) => {
			console.log(e.target.scrollTop);
			if (e.target.scrollTop > 40) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		document.body.addEventListener("scroll", handleScroll, {
			passive: true,
			capture: true,
		});

		// Clean up the event listener on component unmount
		return () => {
			document.body.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={classNames(
				"absolute z-[4000] w-full h-32 flex justify-center items-center  transition-colors duration-300",
				{
					"bg-transparent text-white": !scrolled,
					"bg-white text-black": scrolled,
				}
			)}
		>
			<nav className="w-full h-20 font-montseraat flex flex-row justify-between items-center bg-transparent">
				<div className="flex flex-row justify-between items-center w-full mx-5">
					<div className="w-1/3">logo</div>
					<ul className="lg:flex hidden w-1/3 flex-row items-center justify-center gap-6 font-montseraat">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="text-[20px] hover:underline font-montseraat"
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
					<ul className="flex w-1/3 flex-row  justify-end items-center gap-5">
						<li className="flex flex-row items-center gap-2">
							<a href="mailto:uniqueauditing@gmail.com">
								<CiMail
									className="hover:scale-110 transition-all ease-in-out duration-300 "
									size={20}
								/>
							</a>
						</li>
						<li className="flex flex-row items-center gap-2">
							<a href="tel:+971568303575">
								<CiPhone
									className="hover:scale-110 transition-all ease-in-out duration-300 "
									size={20}
								/>
							</a>
						</li>
						<li>
							<button className="bg-primary rounded-full hover:bg-primary/80 transition-all font-montseraat duration-300 ease-in-out text-white px-6 font-bold py-2">
								Book Consultation
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<aside
				className={classNames(
					`fixed top-0 left-0 w-1/2 h-full bg-white z-50 transition-all duration-300`,
					{
						"translate-x-0": opened,
						"-translate-x-full": !opened,
					}
				)}
			>
				<div className="px-5 pt-5">
					<div
						onClick={() => {
							setOpened(!opened);
						}}
						className={classNames(`tham p lg:hidden tham-e-squeeze tham-w-6`, {
							"tham-active": opened,
						})}
					>
						<div className="tham-box">
							<div className="tham-inner" />
						</div>
					</div>
				</div>
				<ul className="flex py-20 flex-col items-start p-5 gap-10">
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
