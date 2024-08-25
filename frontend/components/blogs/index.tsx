import api from "@/app/api";
import React from "react";
import Spinner from "../defaults/loaders";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { blog } from "@/types/types";
import Carousel from "../Carousel";

export default async function Blogs() {
	const res = await api.get("/api/blogs");
	if (!res) {
		return (
			<div>
				<Spinner />
				Loading..
			</div>
		);
	}

	return (
		<div className="container  mx-auto">
			<div className="w-full flex flex-col gap-5">
				<h1 className="text-3xl font-bold text-primary md:text-4xl">Blogs</h1>
				<hr className="w-32 h-1 bg-yellow-400"></hr>
			</div>
			<div className="p-5">{res.data && <Carousel slides={res.data} />}</div>
		</div>
	);
}
