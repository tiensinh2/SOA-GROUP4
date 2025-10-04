"use client";

import React from "react";
import Container from "./Container";
import { headerData } from "../../../constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-6 text-sm capitalize font-semibold text-shadow-shop-light-gray-text">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop-dark-blue hoverEffect relative group ${
            pathname === item?.href ? "text-shop-dark-blue" : ""
          }`}
        >
          {item?.title}
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop-dark-purple group-hover:w-1/2 hoverEffect group-hover:left-0" />
          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-dark-purple group-hover:w-1/2 hoverEffect group-hover:right-0" />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
