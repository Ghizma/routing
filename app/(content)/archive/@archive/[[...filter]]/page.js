import NewsList from "@/components/news-list";
import Link from "next/link";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYears = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();

  if (selectedYears && !selectedMonth) {
    news = await getNewsForYear(selectedYears);
    links = getAvailableNewsMonths(selectedYears);
  }

  if (selectedYears && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYears, selectedMonth);
    links = [];
  }

  let newsContent = (
    <>
      <p>Select year and month please.</p>
      <p>No news found for the selected period.</p>
    </>
  );

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if (
    (selectedYears && !availableYears.includes(selectedYears)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYears).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYears
                ? `/archive/${selectedYears}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
