import { Heart } from "lucide-react";
import React from "react";
import Link from "next/link";

const FavoriteButton = () => {
    return <Link href = {"/cart"} className="group relative">
        <Heart className="w-5 h-5 hover:text-shop-dark-blue cursor-pointer hoverEffect"/>
        <span className="absolute -top-1 -right bg-shop-dark-blue text-shop-light h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center"></span>
    </Link>
}
export default FavoriteButton;