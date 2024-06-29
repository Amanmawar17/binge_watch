"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/next.svg";
import { usePathname } from "next/navigation";
import Setting from "./Settings";
import UserNav from "./UserNav";
import { ThemeToggle } from "./ThemeToggle";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Pricing", href: "/pricing" },
  { name: "Github", href: "/" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
        {links.map((item, index) => (
                <li
                  key={index}
                  className={`p-3 hover:text-primary hover:border-b-primary hover:border-b-2 
            ${
              pathName === item.href 
                ? "border-b-2 border-b-primary text-primary "
                : ""
            } `}
                  
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <ThemeToggle/>
        <Setting/>
        <UserNav />
      </div>
    </div>
  );
}