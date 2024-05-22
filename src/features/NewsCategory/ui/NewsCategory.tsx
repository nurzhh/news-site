import { CategoryI } from "@/shared/lib/types";
import cn from "classnames";

const tagColors = {
  Ақпарат: "bg-akparat text-white",
  Әдебиет: "bg-adebiet text-white",
  Өнер: "bg-oner text-white",
  Ғылым: "bg-gilym text-black",
  Эксклюзив: "bg-exc text-white",
  Карьера: "bg-career text-white",
  Спорт: "bg-sport text-white",
  Тарих: "bg-tarih text-white",
};

export default function NewsCategory({ tag, className }: CategoryI) {
  return (
    <div
      className={cn(
        `py-[5px] text-2sm leading-[14px] px-2 ${tagColors[tag]}`,
        className
      )}
    >
      {tag}
    </div>
  );
}
