'use client";'
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
const Logo = ({className, spanDesign}: {className?: string, spanDesign?: string}) => {
    return <Link href="/">
        <h2 className={cn("text-2xl text-shadow-shop-dark-pink font-black tracking-wider uppercase hover:text-shop-accent-dark hoverEffect group font-sans", className)}>
            Shopcar<span className={cn("text-shop-dark-green group-hover:text-shop-dark-pink", spanDesign)}>t</span>
            </h2>
    </Link>
};
export default Logo;