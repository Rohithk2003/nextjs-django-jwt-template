import AboutUs from "@/components/aboutus";
import Contact from "@/components/contact";
import CurvedDiv from "@/components/Curved";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Link from "next/link";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
export default function Home() {
	return (
		<main className="relative overflow-hidden font-montseraat">
			<Hero />
			<AboutUs />
			<Services />
			<Faq />
			<Contact />
			<div className="fixed z-[5000] bottom-10 flex flex-col items-end gap-2 right-10">
				<Link
					href="/"
					className="bg-green-500 p-2 rounded-full size-10 flex justify-center items-center"
				>
					<BsWhatsapp
						size={44}
						color="white"
					/>
				</Link>
				{/* <Link
					href="/"
					className="bg-primary gap-2  text-white p-3 w-full rounded-full size-10 flex justify-center items-center"
				>
					<FiMail
						size={20}
						color="white"
					/>
					Email
				</Link> */}
			</div>
		</main>
	);
}
