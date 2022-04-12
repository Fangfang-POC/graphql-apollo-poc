/* eslint-disable import/no-commonjs */
const fontFamily =
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

const descriptionCss = {
    color: '#787878',
    fontFamily,
    fontSize: 24,
    fontWeight: 300,
    lineHeight: '32px',
    marginBottom: 32,
    maxWidth: 560,
}

module.exports = {
    styles: {
        ComponentsList: {
            list: { paddingLeft: 24, paddingRight: 24 },
            item: { '& a': { color: '#333 !important', lineHeight: '24px !important' } },
        },
        Editor: {
            root: {
                background: '#f3f4f6',
            },
        },
        Heading: {
            heading2: {
                color: '#F16421',
                fontSize: 40,
                fontWeight: 'bold',
                marginBottom: 16,
                '& > a': { textDecoration: 'none !important' },
            },
        },
        Examples: {
            root: {
                '& .description': descriptionCss,
            },
        },
        MarkdownHeading: {
            spacing: {
                marginBottom: 24,
                '& h2': {
                    color: '#333',
                    fontFamily,
                    fontSize: 32,
                    fontWeight: 600,
                    lineHeight: '45px',
                },
            },
        },
        Pathline: { pathline: { fontSize: 14, fontStyle: 'italic', color: '#333' } },
        ReactComponent: {
            header: { marginBottom: 16 },
            docs: {
                '& p': descriptionCss,
            },
        },
        SectionHeading: {
            wrapper: {
                marginBottom: 0,
                '& h1': {
                    color: '#A9A9A9',
                    fontFamily,
                    fontSize: 13,
                    fontWeight: 'normal',
                },
            },
            sectionName: { textDecoration: 'none !important' },
        },
        StyleGuide: {
            sidebar: {
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            },
            logo: {
                alignItems: 'center',
                border: 'none ',
                display: 'flex',
                minHeight: 100,
                flexDirection: 'column',
                marginTop: 12,
                padding: 0,
                fontFamily,
            },
            content: {
                padding: [[96, 60]],
                maxWidth: 1200,
            },
            footer: { display: 'none' }, // hide "created with React StyleGuidist" link
        },
        Table: {
            cell: {
                minWidth: 150,
                '& p': {
                    fontSize: 13,
                    lineHeight: '20px',
                },
            },
        },
        Code: {
            code: {
                background: '#f5f5f5',
                padding: '2px 4px',
                borderRadius: 4,
                fontFamily:
                    'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace', // https://qwtel.com/posts/software/the-monospaced-system-ui-css-font-stack/
            },
        },
    },
    theme: {
        color: {
            border: '#dfdfdf',
            light: '#787878',
            link: '#178AF7',
            linkHover: '#F16421',
            sidebarBackground: '#ffffff',
        },
        fontFamily: { base: fontFamily },
        sidebarWidth: 241,
    },
}
