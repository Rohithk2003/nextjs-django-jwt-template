import React from "react";
import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
	return (
		<div className="w-full flex justify-center font-arial items-center text-white text-xl h-20 bg-footer">
			<PiCopyrightLight />
			2024 Unique Auditing & Tax Consultancy LLC
		</div>
	);
}
