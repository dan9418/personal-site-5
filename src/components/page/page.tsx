
import React from "react";
import Header from '../header/header';
import "./page.scss";

const Page: React.FC<any> = ({ pageName, pageTitle, isHeaderVisible, children }) => {
    return (
        <>
            <title>{`Dan Bednarczyk | ${pageTitle}`}</title>
            <main className={`page ${pageName}`}>
                {isHeaderVisible && <>
                    <Header pageName={pageName} />
                    <h1>
                        {pageTitle}
                    </h1>
                </>}
                {children}
            </main>
        </>
    );
}

export default Page;