const path = require("path");
const { styles, theme } = require("./styleguide.styles");

module.exports = {
    webpackConfig: require('./webpack.config'),
    pagePerSection: true,
    styleguideDir: 'demo',
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    usageMode: 'expand', // 'hide' | 'collapse' | 'expand',
    // styles & layout customization
    styleguideComponents: {
        // StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer'),
        SectionsRenderer: path.join(
            __dirname,
            "styleguide/components/SectionsRenderer"
        ),
        // LogoRenderer: path.join(__dirname, "styleguide/components/Logo"),
        // ToolbarButtonRenderer: path.join(__dirname, 'styleguide/components/RenderNull'),
        Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
        TableOfContentsRenderer: path.join(
            __dirname,
            "styleguide/components/TableOfContentsRenderer"
        ),
        // ReactComponentRenderer: path.join(__dirname, 'styleguide/components/ReactComponentRenderer.tsx'),
        // VersionRenderer: path.join(__dirname, 'styleguide/components/VersionRenderer.tsx'),
        // TypeRenderer: path.join(__dirname, 'styleguide/components/TypeRenderer.tsx'),
    },
    styles,
    theme,
    sections: [
        {
            name: 'Introduction',
            content: 'README.md'
        },
        {
            name: 'Graphql Demo',
            // content: 'docs/ui.md',
            // components: 'src/components/**/[A-Za-z]*.tsx',
            sections: [{
                name: 'Fragment example',
                components: ['src/components/FragmentExample/UserComponent.tsx']
            }, {
                name: 'Mutation example',
                components: ['src/components/MutationExample/Users.tsx']
            }]
        }
    ]
}