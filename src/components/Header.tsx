import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="fixed z-50 flex items-center w-full border-b justify-between p-4 backdrop-blur-sm">
      <div className="flex items-center">
        <p className="font-semibold text-xl">Ryoma Maeda</p>
      </div>
      <div className="flex items-center text-lg">
        <Link
          href="#top-section"
          className="mr-4 font-medium whitespace-nowrap"
        >
          Top
        </Link>
        <Link href="#about-section" className="font-medium whitespace-nowrap">
          About
        </Link>
      </div>
    </header>
  );
};
