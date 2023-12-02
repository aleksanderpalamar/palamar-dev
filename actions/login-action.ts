"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_AUTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    })
  })

  if (response.status === 200) {
    const data = await response.json();
    redirect("/dashboard")   
  } else {
    const data = await response.json();
    return { error: data.error };
  }
}