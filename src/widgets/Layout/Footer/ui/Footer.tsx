"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { fetchAllNews } from "@/shared/model/news/newsSlice";
import Link from "next/link";

export default function Footer() {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);

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

  return (
    <footer className="py-8 bg-main">
      <div className="text-center">
        <li className="container flex items-center gap justify-center">
          {uniqueAuthors.map((author, index) => (
            <Link
              href={""}
              className="py-2 px-4 text-white leading-6 text-sm"
              key={index}
            >
              {author}
            </Link>
          ))}
        </li>
        <div className="opacity-[0.1] bg-white w-full h-[1px] my-8"></div>
        <p className="text-sm leading-6 text-gray">
          Байлыныс үшін: Байлыныс үшін: magzhankz@gmail.com
        </p>
        <div className="opacity-[0.1] bg-white w-full h-[1px] my-8"></div>
        <p className="text-sm leading-6 text-gray">
          Барлық құқықтар сақталған@2024
        </p>
      </div>
    </footer>
  );
}
