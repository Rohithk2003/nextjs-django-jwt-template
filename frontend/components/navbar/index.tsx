"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CiMail, CiPhone } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
const links = [
	{
		name: "Home",
		href: "/",
		submenu: [],
	},
	{
		name: "About",
		href: "/about-us",
		submenu: [],
	},
	{
		name: "Services",
		href: "/services",
		submenu: [
			{ name: "Taxation", href: "/services/consulting" },
			{ name: "Accounting and Bookkeeping", href: "/services/consulting" },
			{ name: "Business", href: "/services/consulting" },
			{ name: "CFO", href: "/services/consulting" },
			{ name: "Auditing", href: "/services/auditing" },
		],
	},
	{
		name: "Contact Us",
		href: "/contact",
		submenu: [],
	},
];

export default function Navbar() {
	const [opened, setOpened] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(-1);

	const handleDropdownToggle = (index: number) => {
		setDropdownOpen(dropdownOpen === index ? -1 : index);
	};

	return (
		<div
			className={classNames(
				" z-[4000] w-full h-24 flex font-poppins justify-center items-center transition-colors duration-300",
				"bg-white text-black shadow-xl"
			)}
		>
			<nav className="w-full h-12 font-poppins flex flex-row justify-between items-center bg-transparent">
				<div className="flex  justify-between items-center w-full md:mx-5 mx-1 ">
					<div className="flex justify-start w-full items-center  ">
						<Image
							src="/icon/logo.png"
							alt="Unique Auditing"
							width={200}
							className=" object-contain  w-36 h-36"
							height={50}
						/>
					</div>
					<ul className="lg:flex hidden w-full font-bold col-span-2 flex-row items-center justify-end   gap-6 font-poppins">
						{links.map((link, index) => (
							<li
								key={link.href}
								className="relative"
							>
								<div className="flex flex-row items-center">
									<Link
										href={link.href}
										onMouseEnter={() => handleDropdownToggle(index)}
										className="text-[18px] hover:underline font-poppins"
									>
										{link.name}
									</Link>
									{link.submenu.length > 0 && <MdKeyboardArrowDown />}
								</div>
								{link.submenu.length > 0 && (
									<ul
										onMouseLeave={() => handleDropdownToggle(index)}
										className={classNames(
											"absolute left-0 p-2 w-fit bg-white shadow-lg transition-opacity duration-300 ease-in-out",
											{
												"opacity-100 visible": dropdownOpen === index,
												"opacity-0 invisible": dropdownOpen !== index,
											}
										)}
									>
										{link.submenu.map((submenuItem) => (
											<li key={submenuItem.href}>
												<Link
													href={submenuItem.href}
													className="block px-4 py-2 text-black w-max hover:bg-gray-100"
												>
													{submenuItem.name}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
						<li className="flex flex-row items-center gap-2">
							<a href="mailto:uniqueauditing@gmail.com">
								<CiMail
									className="hover:scale-110 transition-all ease-in-out duration-300 "
									size={18}
								/>
							</a>
						</li>
						<li className="flex flex-row items-center gap-2">
							<a href="tel:+971568303575">
								<CiPhone
									className="hover:scale-110 transition-all ease-in-out duration-300 "
									size={18}
								/>
							</a>
						</li>
						<li>
							<button
								className={`border bg-primary rounded-lg 
								 " border-black"
								 text-white transition-all  duration-300 ease-in-out  px-4 font-bold py-3`}
							>
								Book Consultation
							</button>
						</li>
					</ul>
					<div className="lg:hidden flex justify-end w-full">
						<div
							onClick={() => {
								setOpened(!opened);
							}}
							className={classNames(
								`tham  !text-white tham-e-squeeze tham-w-6`,
								{
									"tham-active": opened,
								}
							)}
						>
							<div className="tham-box !text-white">
								<div
									className={`tham-inner  bg-black
									`}
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<aside
				className={classNames(
					`fixed top-0 left-0 w-1/2 h-full bg-white z-[1000] transition-all duration-300`,
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
							{link.submenu.length > 0 && (
								<ul className="ml-4 mt-2">
									{link.submenu.map((submenuItem) => (
										<li key={submenuItem.href}>
											<Link href={submenuItem.href}>{submenuItem.name}</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
