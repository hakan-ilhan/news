import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((item, index) => (
          <li key={index}>
            <Link href={`news/${item.slug}`}>
              <img src={`/images/news/${item.image}`} />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsPage;
