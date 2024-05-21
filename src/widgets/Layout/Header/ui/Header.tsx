import { TabsNav } from "@/features/Tabs/ui/Tabs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container pt-[18px]">
      <nav className="pb-4 flex items-center justify-between">
        <p className="font-badscript text-sm leading-6 text-main">
          Мен жастарға сенемін
        </p>
        <Link
          href={"/"}
          className="font-chaupo text-xl leading-[120%] text-main"
        >
          Magzhan.kz
        </Link>
        <span className="font-badscript text-sm leading-6 text-main">
          Мағжан Жұмабаев
        </span>
      </nav>
      <TabsNav />
    </header>
  );
}
