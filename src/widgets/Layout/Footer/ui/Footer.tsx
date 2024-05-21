import { footerData } from "@/shared/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-main">
      <div className="text-center">
        <li className="container flex items-center gap justify-center">
          {footerData.map((data, index) => (
            <Link
              href={data.path}
              className="py-2 px-4 text-white leading-6 text-sm"
              key={index}
            >
              {data.title}
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
