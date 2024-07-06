import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (image, { desc }) => desc(image.createdAt),
  });
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {[...images].map((image, index) => (
        //remove index key once no mock data
        <div key={image.id} className="relative h-40 w-52">
          <img
            className="absolute h-full w-full object-cover"
            src={image.url}
            alt={image.url}
          />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex justify-center text-2xl"> Please sign in </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
