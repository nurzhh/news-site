export type Articles = {
  sources: {
    id: string | any;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface CategoryI {
  tag:
    | "Ақпарат"
    | "Әдебиет"
    | "Өнер"
    | "Ғылым"
    | "Эксклюзив"
    | "Карьера"
    | "Спорт"
    | "Тарих";
  className?: string;
}
