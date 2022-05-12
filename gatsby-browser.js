import React from "react";
import Page from "./src/components/page/page";
import './src/pages/index.scss';
import './src/pages/resume.scss';
import './src/styles/global.scss';

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
    }
}

export const wrapPageElement = ({ element, props }) => {
    return (
        <Page {...PAGE_CONFIG[props.path]}>
            {element}
        </Page>
    );
}
