"use client";
import { Dispatch, SetStateAction, useState } from "react";
// import { AppDispatch } from "@/app/redux/store";
// import { logIn } from "@/app/redux/features/auth-slice";
// import logo1 from "@/public/Icons/logo.png";
// import logo2 from "@/public/HomePage/logo2.png";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { loginUser } from "@/actions/login";
import AlertWithType from "@/components/defaults/notification/alert";
import LoadingButton from "@/components/defaults/LoadingButton";
import { dashboardPage } from "@/constants/urls";

export default function Login() {
	const { data: session } = useSession();
	const [username, setUsername] = useState("");
	const [buttonClicked, setbuttonClicked] = useState(false);
	const [password, setPassword] = useState("");
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [alertProps, setAlertProps] = useState<{
		type: "success" | "error";
		heading: String;
		description: String;
		alertHandler: Dispatch<SetStateAction<boolean>>;
	}>({
		type: "error",
		heading: "",
		description: "String",
		alertHandler: setShowAlert,
	});
	// const dispatch = useDispatch<AppDispatch>();
	const params = useSearchParams();
	const handleSubmit = async () => {
		const response = await loginUser({ username, password });
		if (response.status === "error") {
			setShowAlert(true);
			setAlertProps({
				type: "error",
				heading: "Error occurred",
				description: response.message,
				alertHandler: setShowAlert,
			});
		} else {
			// dispatch(logIn(username, session?.user.is_payment_completed));
			setShowAlert(true);
			setAlertProps({
				type: "success",
				heading: "Success" + response.status,
				description:
					"You have successfully logged in, redirecting you please wait...",
				alertHandler: setShowAlert,
			});

			window.location.href = params.get("callbackUrl") || dashboardPage;
		}
		setbuttonClicked(false);
	};
	return (
		<div
			className={
				"w-full h-screen font-inter flex bg-white text-black justify-center items-center"
			}
		>
			<section className=" w-full">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<Link href="/">
						<div className="w-full object-fit justify-center items-center  h-20 flex flex-row">
							{/* <Image
								className="w-44 h-full object-contain"
								src={logo1}
								alt="logo1"
							/> */}
							{/* put your logo here */}
						</div>
					</Link>
					<div className="w-full bg-white  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Sign in to your account
							</h1>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setbuttonClicked(true);
									handleSubmit();
								}}
								className="space-y-4 md:space-y-6"
							>
								{showAlert && (
									<AlertWithType
										type={alertProps.type}
										heading={alertProps.heading}
										description={alertProps.description}
										alertHandler={alertProps.alertHandler}
									/>
								)}
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 "
									>
										Your username
									</label>
									<input
										type="text"
										name="username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										id="username"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Enter your username.."
										required
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 "
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										required
									/>
								</div>

								{buttonClicked ? (
									<LoadingButton
										text={"Signing in..."}
										className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
									/>
								) : (
									<button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
										Sign in
									</button>
								)}
								<p className="text-sm font-light text-black">
									Don&apos;t have an account yet?{" "}
									<a
										href="/auth/register"
										className="font-medium text-primary-600 hover:underline"
									>
										Sign up
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
