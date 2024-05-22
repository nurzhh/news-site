import NewsCategory from "@/features/NewsCategory/ui/NewsCategory";
import Card from "@/shared/ui/Card/Card";

interface NewsCardProps {
  urlToImage?: string;
  title: string;
  publishedAt: string;
}

export default function NewsCard({
  urlToImage,
  title,
  publishedAt,
}: NewsCardProps) {
  return (
    <Card className="flex flex-col" imageCard={urlToImage}>
      <NewsCategory tag="Ақпарат" />
      <h1 className="text-xl font-bold leading-10 text-white">{title}</h1>
      <p className="text-sm leading-6 text-white">{publishedAt}</p>
    </Card>
  );
}
