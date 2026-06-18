import NewsList from "@/components/news-list";

export default async function newsPage() {
  const responce = await fetch("http://localhost:8080/news");

  if (!responce.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await responce.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />{" "}
    </>
  );
}
