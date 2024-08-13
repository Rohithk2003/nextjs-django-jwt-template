import Link from "next/link";
import React from "react";
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
	return (
		<nav className="w-full border-b h-20  shadow-xl font-inter bg-navbar flex flex-row justify-between items-center">
			<div className="flex flex-row justify-between w-full items-center mx-44">
				<div>Logo</div>
				<ul className="flex flex-row items-center gap-20">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="text-xl "
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
			</div>
		</nav>
	);
}
