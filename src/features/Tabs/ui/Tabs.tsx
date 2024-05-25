"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { fetchAllNews } from "@/shared/model/news/newsSlice";
import Button from "@/shared/ui/Button/Button";
import Card from "@/shared/ui/Card/Card";
import Search from "@/shared/ui/icons/search/search";
import cn from "classnames";

export const TabsNav = () => {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  const getUniqueAuthors = (articles: any) => {
    const authorsSet = new Set();
    articles.forEach((article: any) => {
      if (article.author && !article.author.includes(".com")) {
        authorsSet.add(article.author);
      }
    });
    return Array.from(authorsSet);
  };

  const uniqueAuthors = news?.articles
    ? getUniqueAuthors(news.articles).slice(0, 10)
    : [];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Card
      cardStyle="third"
      className="flex mb-4 py-1 px-1.5 w-fit items-center justify-between"
    >
      <div className="flex w-full">
        {uniqueAuthors.map((author, index) => (
          <Button
            key={index}
            className={cn(
              "transition-all rounded-[20px] whitespace-nowrap duration-300 ease-in-out text-main text-sm leading-6 px-4 py-2",
              {
                "bg-main text-white": activeTab === index,
                "hover:bg-main hover:text-white opacity-90":
                  activeTab !== index,
              }
            )}
            onClick={() => handleTabClick(index)}
          >
            {author}
          </Button>
        ))}
      </div>
      <Card className="p-2 cursor-pointer ml-2" cardStyle="second">
        <Search />
      </Card>
    </Card>
  );
};
