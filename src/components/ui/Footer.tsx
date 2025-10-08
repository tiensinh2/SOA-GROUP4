import Container from "./Container";
import React from "react";
import FooterTop from "./FooterTop";
const Footer = () => {
    return <footer className="bg-shop-dark text-lightColor pt-10 border-t">
        <Container className = "mb-40">
            <FooterTop/>
        </Container>
    </footer>
};
export default Footer;