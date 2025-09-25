"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="absolute inset-0">
        <div className="-z-10 absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-white [background-size:16px_16px]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-10 flex items-center justify-center gap-6">
          <div className="text-8xl">🦺</div>
        </div>

        <h1 className="mb-4 font-extrabold text-gray-900">
          Welcome to Workflows Starter
        </h1>

        <p className="mb-16 text-gray-600 text-lg">
          An example workflow Next.js application for handling async processes.
        </p>

        <div className="mb-6 w-full md:max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <button
          type="button"
          onClick={async () => {
            if (!email.trim()) {
              toast.error("Please enter an email address");
              return;
            }

            try {
              const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email.trim(),
                }),
              });

              if (!response.ok) {
                throw new Error("Failed to start workflow");
              }

              toast.success("Workflow started");
              setEmail("");
            } catch (error) {
              toast.error("Workflow failed");
            }
          }}
          className="mx-3 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 font-medium text-sm text-white ring-offset-background transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:max-w-sm"
        >
          Start workflow
        </button>
      </div>
    </main>
  );
}
