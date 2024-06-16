import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function NavigationBar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-700 bg-gray-900 p-4 text-xl font-semibold">
      <h1 className="text-2xl font-bold ">Gallery</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
