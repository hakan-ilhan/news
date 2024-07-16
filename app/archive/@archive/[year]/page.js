import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/lib/news";

function FilteredNewsPage({ params }) {
  const year = params.year;
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
}

export default FilteredNewsPage;
