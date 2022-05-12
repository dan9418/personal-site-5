import React from "react";
import Page from "./src/components/page/page";
import './src/pages/index.scss';
import './src/pages/resume.scss';
import './src/styles/global.scss';
import './src/components/button/button.scss';
import './src/components/header/header.scss';
import './src/components/icon/icon.scss';
import './src/components/icon-link/iconLink.scss';
import './src/components/icon-list/iconList.scss';
import './src/components/link-panel/linkPanel.scss';
import './src/components/page/page.scss';
import './src/components/submenu/subMenu.scss';

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
    console.log('dpb', props.path);
    return (
        <Page {...(PAGE_CONFIG[props.path] || PAGE_CONFIG["/"])}>
            {element}
        </Page>
    );
}
