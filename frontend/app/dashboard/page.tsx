import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/auth";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);
	console.log(session);
	return <div>Dashboard</div>;
}
