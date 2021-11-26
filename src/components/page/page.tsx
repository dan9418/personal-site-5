
import { Link } from "gatsby";
import React from "react";
import Header from '../header/header';
import Icon from "../icon/icon";
import "./page.scss";

const Page: React.FC<any> = ({ pageName, pageTitle, children }) => {
    return (
        <>
            <title>Dan Bednarczyk{pageTitle ? ` - ${pageTitle}` : ''}</title>
            {pageName !== 'index' && <>
                <Header />
                <ul className="breadcrumb-list">
                    <li>
                        <Link to="/resume">
                            <Icon id="home" />
                        </Link>
                    </li>
                    <li>
                        <Icon id="navRight" />
                    </li>
                    <li>
                        <h1>
                            {pageTitle}
                        </h1>
                    </ li>
                </ul>
            </>}
            <main className={`page ${pageName}`}>
                {children}
            </main>
        </>
    );
}

export default Page;