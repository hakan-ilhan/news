import Link from "next/link";
import React from "react";

function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((item, index) => (
        <li key={index}>
          <Link href={`/news/${item.slug}`}>
            <img src={`/images/news/${item.image}`} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
