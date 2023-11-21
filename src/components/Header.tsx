import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="fixed z-50 flex items-center w-full border justify-between p-4 backdrop-blur-sm">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="/next.svg" alt="@shadcn" />
          <AvatarFallback />
        </Avatar>
      </div>
      <div className="flex items-center">
        <Link
          href="#top-section"
          className="px-4 font-medium whitespace-nowrap"
        >
          Top
        </Link>
        <Link
          href="#about-section"
          className="px-4 font-medium whitespace-nowrap"
        >
          About
        </Link>
      </div>
    </header>
  );
};
