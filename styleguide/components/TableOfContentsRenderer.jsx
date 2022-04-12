import React from 'react'
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled'

const styles = ({ color, fontFamily, space }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: fontFamily.base,
        '& nav': { overflowY: 'scroll' },
        '& nav ul li a': {
            display: 'inline-block',
            fontSize: '14px !important',
            height: 24,
            verticalAlign: 'center',
        },
        '& nav > ul': { padding: [[0, 24, 24, 24]] },
        '& nav > ul > li:first-child': { marginTop: 0 },
        '& nav > ul > li > a': {
            color: '#a9a9a9 !important',
        },
    },
    theme: {
        padding: '0px 24px 24px',
    },
    search: {
        padding: 0,
        margin: 24,
        minHeight: 40,
    },
    input: {
        display: 'block',
        width: '100%',
        padding: [[space[1], space[1], space[1], 16]],
        color: color.base,
        backgroundColor: color.baseBackground,
        fontFamily: fontFamily.base,
        fontSize: 14,
        border: [[1, color.border, 'solid']],
        borderRadius: 20,
        height: 40,
        transition: 'all ease-in-out .1s',
        '&:focus': {
            isolate: false,
            borderColor: color.link,
            boxShadow: [[0, 0, 0, 2, color.focus]],
            outline: 0,
        },
        '&::placeholder': {
            isolate: false,
            fontFamily: fontFamily.base,
            fontSize: 14,
            fontWeight: 'normal',
            color: '#c3c3c3',
        },
    },
})


function TableOfContentsRenderer({
    classes,
    children,
    searchTerm,
    onSearchTermChange,
}) {
    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <input
                    value={searchTerm}
                    className={classes.input}
                    placeholder="Search..."
                    aria-label="Search..."
                    onChange={event => onSearchTermChange(event.target.value)}
                />
            </div>
            <nav>{children}</nav>
        </div>
    )
}

TableOfContentsRenderer.displayName = 'TableOfContentsRenderer'

// eslint-disable-next-line import/no-unused-modules
export default Styled(styles)(TableOfContentsRenderer)
