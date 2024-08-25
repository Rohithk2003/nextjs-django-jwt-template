import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function BlogCard({
	title,
	content,
	image,
	date,
}: {
	title: string;
	content: string;
	image: string;
	date: string;
}) {
	return (
		<section className="w-96 h-72  gap-5 bg-white flex flex-col">
			<Image
				src={image || ""}
				alt="blog"
				width={300}
				height={200}
			/>
			<p className="font-bold text-xl">{title}</p>
			<p className="text-gray-500">{content}</p>
			<a
				href=""
				className="flex flex-row items-center gap-2"
			>
				Read More <FaArrowRight />
			</a>
		</section>
	);
}
