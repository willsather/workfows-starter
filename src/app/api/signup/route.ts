import { userSignupWorkflow } from "@/workflows/user-signup";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  await userSignupWorkflow(email);

  return NextResponse.json({
    message: "User signup workflow started",
  });
}
