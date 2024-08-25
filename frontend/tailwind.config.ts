import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				"3xl": "1600px",
				"4xl": "1800px",
			},
			colors: {
				navbar: "#f7f9fc",
				primary: "#223C6B",
				footer: "#6497B1",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				arial: ["Arial", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				montseraat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-hamburgers"), require("tailwindcss-animate")],
};
export default config;
