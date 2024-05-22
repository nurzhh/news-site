import NewsCard from "@/entities/NewsCard/ui/NewsCard";
import { News } from "@/shared/lib/types";
import Link from "next/link";
import Masonry from "react-masonry-css";

interface NewsListProps {
  amount: number;
  news: News;
}

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function NewsList({ news, amount }: NewsListProps) {
  const list = news.articles?.slice(0, amount);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid gap-6"
      columnClassName="my-masonry-grid_column"
    >
      {list.map(({ source, title, urlToImage, publishedAt }) => (
        <Link href={`/news/${source.id}`} key={source.id}>
          <NewsCard
            title={title}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
          />
        </Link>
      ))}
    </Masonry>
  );
}
