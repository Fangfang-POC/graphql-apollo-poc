/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/display-name */
import * as React from 'react'
import DefaultSectionsRenderer from 'react-styleguidist/lib/client/rsg-components/Sections/SectionsRenderer'

import { isPlainObject } from '../../src/utils/lang'

type ExpandMode = 'expand' | 'collapse' | 'hide'

// https://github.com/styleguidist/react-styleguidist/blob/0d59a0a3a02f139efa0703d2bda25588d555af38/src/typings/RsgSection.ts#L29
interface MarkdownExample {
    type: 'markdown'
    content: string
    settings?: Record<string, any>
}

interface CodeExample {
    type: 'code'
    content: string
    lang?: string | null
    settings?: Record<string, any>
}

interface RuntimeCodeExample extends CodeExample {
    evalInContext(a: string): () => any
}

type Example = RuntimeCodeExample | MarkdownExample

export interface Section {
    components?: any
    content?: MarkdownExample | Example[] | string
    description?: string
    exampleMode?: ExpandMode
    expand?: boolean
    external?: boolean
    externalLink?: boolean
    filepath?: string
    href?: string
    ignore?: string | string[]
    name?: string
    sectionDepth?: number
    sections?: Section[]
    slug?: string
    usageMode?: ExpandMode
    visibleName?: string
}

/**
 * Fix a react-styleguidist bug where section content is returned as object
 * rather than array or string.
 * https://github.com/styleguidist/react-styleguidist/blob/master/src/loaders/utils/getSections.ts#L25
 *
 * Any content other than arrays isn't rendered
 * https://github.com/styleguidist/react-styleguidist/blob/master/src/client/rsg-components/Section/Section.tsx#L33
 *
 */
// eslint-disable-next-line import/no-unused-modules
export default function SectionsRenderer({ children, ...props }: any) {
    return (
        <DefaultSectionsRenderer {...props}>
            {React.Children.map(children, (child: any) => {
                if (!React.isValidElement(child)) return child
                const section = (child as React.ReactElement<{ section?: Section }>).props.section
                return React.cloneElement(
                    child,
                    section ? ({ section: getFixedSection(section) } as any) : {}
                )
            })}
        </DefaultSectionsRenderer>
    )
}

function getFixedSection(section: Section): Section {
    if (!Array.isArray(section.sections) || !isPlainObject(section.content)) return section

    if (section?.sections?.length) {
        return { ...section, sections: section?.sections?.map(s => getFixedSection(s)) }
    }

    if (isPlainObject(section.content)) {
        return { ...section, content: [section.content as any] }
    }

    return section
}
