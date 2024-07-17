import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

function ImagePage({ params }) {
  const imageSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === imageSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
}

export default ImagePage;
