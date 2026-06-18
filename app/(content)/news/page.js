"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function newsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const responce = await fetch("http://localhost:8080/news");
      if (!responce.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }
      const news = await responce.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loadin...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
