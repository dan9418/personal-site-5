import React from "react";
import Page from "./src/components/page/page";

/*export const wrapRootElement = ({ element, ...props }) => {
    return (
        <ErrorBoundary>
            {element}
        </ErrorBoundary>
    )
}*/

const PAGE_CONFIG = {
    '/': {
        isHeaderVisible: false,
        pageTitle: 'Home',
        pageName: 'index'
    },
    '/resume/': {
        isHeaderVisible: true,
        pageTitle: 'Resume',
        pageName: 'resume'
    },
    '/portfolio/': {
        isHeaderVisible: true,
        pageTitle: 'Portfolio',
        pageName: 'portfolio'
    }
}

export const wrapPageElement = ({ element, props }) => {
    return (
        <Page {...PAGE_CONFIG[props.path]}>
            {element}
        </Page>
    );
}
