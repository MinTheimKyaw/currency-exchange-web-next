"use client";
import Link from "next/link";
import { ModeToggle } from "./commonUi/toggleMode";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="w-full shadow-lg ">
      <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center justify-center space-x-6 lg:space-x-8 md:pl-24 text-base md:ml-auto md:mr-auto">
          <Link
            href="/"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/currencylist"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/currencylist"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Currency list
          </Link>
          <Link
            href="/aboutus"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/aboutus"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className={`text-md font-medium transition-colors hover:text-primary ${
              pathname === "/contactus"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
