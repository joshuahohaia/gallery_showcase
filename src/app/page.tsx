import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c972e125-1233-4ae4-a10c-50988a267cb0-2eo.jpg",
  "https://utfs.io/f/6bb3377b-f5ab-4c05-a817-cdb5498eb672-2en.jpg",
  "https://utfs.io/f/4b925b20-791c-4db3-85fe-456f91e06fed-2ep.jpg",
  "https://utfs.io/f/1c3dcc52-97f5-44fa-9323-6ca38a1f6955-2em.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4 ">
        {posts.map((post) => (
          <div key={post.id} className="relative h-40 w-52">
            <li>{post.id}</li>
            <li>{post.name}</li>
            <li>{post.createdAt?.toString()}</li>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          //remove index key once no mock data
          <div key={`${image.id} - ${index}`} className="relative h-40 w-52">
            <img
              className="absolute h-full w-full object-cover"
              src={image.url}
              alt={image.url}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
