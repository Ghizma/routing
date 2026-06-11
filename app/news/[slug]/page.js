import { DUMMY_NEWS } from "@/dummy-news";
import { redirect } from "next/dist/server/api-utils";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItems = DUMMY_NEWS.find((newsItems) => newsItems.slug === newsSlug);

  if (!newsItems) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItems.image}`} alt={newsItems.title} />
        <h1>{newsItems.title}</h1>
        <time dateTime={newsItems.date}>{newsItems.date} </time>
      </header>
      <p>{newsItems.content}</p>
    </article>
  );
}
