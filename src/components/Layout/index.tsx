"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";


import { sidebarUrl } from "@/data/sidebarUrl";


type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <main className="flex bg-first ">
      <aside className=" w-96 p-10 bg-second shadow-lg flex flex-col items-center gap-5 ">
        <figure className=" size-28 rounded-full overflow-hidden relative">
          <Image
            src={"/images/cat-logo.png"}
            alt="cat logo"
            fill
            className=" object-cover"
          />
        </figure>
        <ul className=" text-fontColor space-y-5 w-full">
          {sidebarUrl.map((item, indx) => (
            <li key={indx}>
              <Link
                href={item.href}
                className={`${
                  item.href === pathname
                    ? " bg-third text-white shadow-md"
                    : "hover:bg-first"
                } duration-150 w-full inline-block px-3 py-2 rounded-md`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className=" flex-1 min-h-screen p-10">{children}</section>
    </main>
  );
};

export default Layout;
