import NewsCard from "@/entities/NewsCard/ui/NewsCard";
import { News } from "@/shared/lib/types";
import Link from "next/link";

interface NewsListProps {
  amount: number;
  news: News;
}

export default function NewsList({ news, amount }: NewsListProps) {
  const list = news.articles?.slice(0, amount);

  return (
    <>
      {list.map(({ source, title, urlToImage, publishedAt }) => (
        <Link href={`/news/${source.id}`} key={source.id}>
          <NewsCard
            title={title}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
          />
        </Link>
      ))}
    </>
  );
}
