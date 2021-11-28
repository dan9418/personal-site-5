
import React from "react";
import Header from '../header/header';
import SubMenu from '../submenu/subMenu';
import "./page.scss";

const Page: React.FC<any> = ({ pageName, pageTitle, children }) => {
    return (
        <>
            <title>Dan Bednarczyk{pageTitle ? ` - ${pageTitle}` : ''}</title>
            <main className={`page ${pageName}`}>
                {pageName !== 'index' && <>
                    <Header pageName={pageName} />
                    {pageName !== 'resume' && false && <SubMenu />}
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