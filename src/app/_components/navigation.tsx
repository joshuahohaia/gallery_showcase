"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export function NavigationBar() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-700 bg-gray-900 p-4 text-xl font-semibold">
      <h1 className="text-2xl font-bold ">Gallery</h1>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
