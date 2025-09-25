import { sleep } from "@vercel/workflow-core";

export async function userSignupWorkflow(email: string) {
  "use workflow";

  const user = await createUser(email);
  await sendWelcomeEmail(user.id);

  await sleep("30s");

  await sendOnboardingEmail(user.id);

  return { userId: user.id, status: "onboarded" };
}

async function createUser(email: string) {
  "use step";

  console.log(`Creating user with email: ${email}`);

  return { id: crypto.randomUUID(), email };
}

async function sendWelcomeEmail(userId: string) {
  "use step";

  console.log(`Sending welcome email to user: ${userId}`);

  if (Math.random() < 0.3) {
    throw new Error("Retryable!");
  }
}

async function sendOnboardingEmail(userId: string) {
  "use step";

  console.log(`Sending onboarding email to user: ${userId}`);
}
