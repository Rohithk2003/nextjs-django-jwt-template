"use client";
import React, { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
	const [moveFirst, setMoveFirst] = useState(false);
	const [moveLast, setMoveLast] = useState(false);
	const [moveEmail, setMoveEmail] = useState(false);
	const [movePhone, setMovePhone] = useState(false);
	const [moveMessage, setMoveMessage] = useState(false);
	return (
		<div className="grid grid-cols-1 xl:grid-cols-3 w-full min-h-screen">
			<div className="bg-primary text-white  font-montseraat flex p-5 min-h-96 h-full justify-center items-center col-span-1">
				<div className="text-white flex flex-col gap-10">
					<h1 className="text-3xl font-bold ">Contact Information</h1>
					<div className="flex flex-row justify-start gap-11 items-center">
						<FaPhoneVolume size={22} />
						<span className="text-xl font-bold pl-1">+971 50 294 6487</span>
					</div>

					<div className="flex flex-row justify-start gap-11 items-center">
						<FaPhoneVolume size={22} />
						<span className="text-xl font-bold pl-1">+971 50 294 6487</span>
					</div>
					<div className="flex flex-row justify-start gap-11 items-center">
						<div className="bg-white rounded-full p-2">
							<MdEmail color="black" />
						</div>
						<span className="text-xl font-bold">uniqueauditing@gmail.com</span>
					</div>
					{/* <div className="flex flex-row justify-start gap-11 items-center">
						<FaLocationDot size={22} color="white" />
						<span className="text-2xl font-bold">uniqueauditing@gmail.com</span>
					</div> */}
				</div>
			</div>

			<div className="bg-white min-h-[80vh] col-span-2 flex w-full justify-center items-center">
				<main className="py-14 w-full flex justify-center items-center">
					<div className="max-w-screen-4xl px-4 text-gray-600 md:px-8">
						<div className="max-w-2xl space-y-3 sm:text-center">
							<h3 className="text-primary font-semibold">Contact</h3>
							<p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
								Get in touch
							</p>
							<p>
								We&apos;d love to hear from you! Please fill out the form
								bellow.
							</p>
						</div>
						<div className="mt-12 max-w-7xl ">
							<form
								onSubmit={(e) => e.preventDefault()}
								className="space-y-5"
							>
								<div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
									<div>
										<label className="font-medium">First name</label>
										<input
											type="text"
											required
											className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
										/>
									</div>
									<div>
										<label className="font-medium">Last name</label>
										<input
											type="text"
											required
											className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
										/>
									</div>
								</div>
								<div>
									<label className="font-medium">Email</label>
									<input
										type="email"
										required
										className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
									/>
								</div>
								<div>
									<label className="font-medium">Phone number</label>
									<div className="relative mt-2">
										<div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
											<select className="text-sm bg-transparent outline-none rounded-lg h-full">
												<option>US</option>
												<option>ES</option>
												<option>MR</option>
											</select>
										</div>
										<input
											type="number"
											placeholder="+1 (555) 000-000"
											required
											className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
										/>
									</div>
								</div>
								<div>
									<label className="font-medium">Message</label>
									<textarea
										required
										className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
									></textarea>
								</div>
								<button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-indigo-500 active:bg-primary rounded-lg duration-150">
									Submit
								</button>
							</form>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
