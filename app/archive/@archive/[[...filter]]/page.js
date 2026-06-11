import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYears = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYears && !selectedMonth) {
    news = getNewsForYear(selectedYears);
    links = getAvailableNewsMonths(selectedYears);
  }

  if (selectedYears && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYears, selectedMonth);
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

  if (
    (selectedYears && !getAvailableNewsYears().includes(+selectedYears)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYears).includes(+selectedMonth))
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
