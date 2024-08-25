import { z } from "zod";

export const existingUserSchema = z.object({
	username: z
		.string()
		.min(3, {
			message: "Username is too short",
		})
		.max(255, {
			message: "Username should be at most 255 characters",
		}),
	password: z
		.string()
		.min(3, {
			message: "Password is too short",
		})
		.max(255, {
			message: "Password should be at most 255 characters",
		}),
});
export type existingUser = z.infer<typeof existingUserSchema>;

export const newUserSchema = z
	.object({
		username: z
			.string()
			.min(3, {
				message: "Username is too short",
			})
			.max(255, {
				message: "Username should be at most 255 characters",
			}),
		email: z
			.string()
			.min(10, {
				message: "Email is too short",
			})
			.max(100, {
				message: "Email should be at most 255 characters",
			})
			.email("Invalid email address"),
		password: z
			.string()
			.min(3, {
				message: "Password is too short",
			})
			.max(255, {
				message: "Password should be at most 255 characters",
			})
			.regex(/[a-z]/, "Password must contain at least one lowercase letter")
			.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
			.regex(/[0-9]/, "Password must contain at least one number")
			.regex(
				/[^a-zA-Z0-9]/,
				"Password must contain at least one special character"
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password == data.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});
export type newUser = z.infer<typeof newUserSchema>;
