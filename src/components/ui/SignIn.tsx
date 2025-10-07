import React from "react";
import { SignInButton } from "@clerk/nextjs";
const SignIn = () => {
    return(
        <SignInButton mode="modal">
            <button className="text-sm font-semibold hover:text-shop-dark text-lightColor cursor-pointer">
                Login 
            </button>
        </SignInButton>
    );
};
export default SignIn;