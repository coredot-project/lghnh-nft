import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
}) => {
    return (
        <div>
            <Helmet defaultTitle="Dr.Groot" titleTemplate="%s | Dr.Groot" />
            <Header />
            <div style={{ minHeight: "100vh" }}>
                {children!}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;