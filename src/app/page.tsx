import Link from "next/link";

const mockUrls = [
  "https://pqna6vhn7v.ufs.sh/f/TGO71w2QFdNbUf6GV4KWRc70Dq1t6raQw2TIOKEYgsXMFJnN",
  "https://pqna6vhn7v.ufs.sh/f/TGO71w2QFdNbj0wQAoEhGwkpaIf5S0WgNml7RPxsH8OteZiJ",
  "https://pqna6vhn7v.ufs.sh/f/TGO71w2QFdNbzoNbn3dW8qLJ9mZ6PEMsCauXt5yewDN1vcgI",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Link href={image.url} target="_blank">
              <img src={image.url} alt="image" />
            </Link>
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
