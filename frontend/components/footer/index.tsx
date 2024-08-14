import Link from "next/link";
import React from "react";
import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
	return (
		<footer className="flex flex-col gap-2 bg-footer text-white sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
			<p className="text-[15px] text-muted-foreground">
				&copy; 2024 Unique Auditing & Tax Consultancy LLC. All rights reserved.
			</p>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<Link
					href="#"
					className="text-[15px] hover:underline underline-offset-4"
					prefetch={false}
				>
					Terms of Service
				</Link>
				<Link
					href="#"
					className="text-[15px] hover:underline underline-offset-4"
					prefetch={false}
				>
					Privacy Policy
				</Link>
			</nav>
		</footer>
	);
}
