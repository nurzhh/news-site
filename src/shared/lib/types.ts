export interface Source {
  id: string;
  name: string;
}

export interface Articles {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface News {
  status?: string;
  totalResults?: number;
  articles: Articles[];
}

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
