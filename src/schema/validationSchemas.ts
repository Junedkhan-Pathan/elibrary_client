import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(12, "Password not more that 12 charecters"),
});

const signupSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),

  email: z.string().toLowerCase().email("Email must be valid!!"),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(12, "Password not more that 12 charecters"),
});

export { loginSchema, signupSchema };
