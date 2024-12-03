"use server";
import { signIn, signOut } from "@/auth";

export async function doLogout() {
        await signOut({ redirectTo: "/"});
}

export async function doCredentialLogin(formData: FormData): Promise<any> {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        const response = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        if (response?.error) {
            return { success: false, message: response.error };
        }

        return { success: true, data: response };
    } catch (error) {
        return { success: false, message: "An error occurred during login" };
    }
}