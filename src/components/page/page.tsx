
import React from "react";
import Header from '../header/header';
import "./page.scss";

const Page: React.FC<any> = ({ pageName, pageTitle, children }) => {
    return (
        <>
            <title>Dan Bednarczyk{pageTitle ? ` - ${pageTitle}` : ''}</title>
            {pageName !== 'index' && <Header />}
            <main className={`page ${pageName}`}>
                {children}
            </main>
        </>
    );
}

export default Page;