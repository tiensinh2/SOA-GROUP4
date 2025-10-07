import Container from "./Container";
import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { Search } from "lucide-react";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import { Sign } from "crypto";
import MobileMenu from "./MobileMenu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import SignIn from "./SignIn"
const Header = async() => {
    const user = await currentUser();
    console.log(user, 'user');
    return <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md"> 
        <Container className="flex items-center 
        justify-between text-shop-light-gray-text">
            <div className="w-auto md:w-1/3 flex items-center justify-start md:gap-0">
                <MobileMenu/>
                <Logo/>
            </div>
            <HeaderMenu />
            <div className="w-auto h-auto flex items-center justify-center gap-5">
                <Search className="w-5 h-5 hover:text-shop-dark-blue cursor-pointer hoverEffect"/>
                <CartIcon/>
                <FavoriteButton/>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    {!user && <SignIn />}
                </ClerkLoaded>
            </div>

            </Container>

    </header>
};
export default Header;