"use client";
import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";

const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
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
			<nav className="w-full border-b h-20  shadow-xl  bg-navbar flex flex-row justify-between items-center">
				<div className="flex sm:p-0 p-5 flex-row justify-between w-full items-center container mx-auto">
					<div>Logo</div>
					<ul className="lg:flex hidden flex-row items-center gap-20">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="text-lg arial font-bold"
								>
									{link.name}
								</Link>
							</li>
						))}
						<li>
							<button className="bg-primary text-white  px-6 font-bold py-2 rounded-md">
								Book Consultation
							</button>
						</li>
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
