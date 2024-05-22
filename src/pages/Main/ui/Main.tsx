"use client";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { fetchAllNews } from "@/shared/model/news/newsSlice";
import NewsList from "@/widgets/NewsList/ui/NewsList";
import { useEffect } from "react";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { news, loading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="pt-6 container">
      <div className="grid grid-cols-3 gap-5">
        {news && <NewsList news={news} amount={12} />}
      </div>
    </section>
  );
}
