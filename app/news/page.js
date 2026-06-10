import Link from "next/link";

export default function News() {
  const pages = ["First", "Second", "Third"];
  return (
    <>
      <h1>News Page</h1>
      <ul>
        {pages.map((page, id) => {
          return (
            <li key={id}>
              <Link href={`/news/${id + 1}`}>
                {page} News Sections {id + 1}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
