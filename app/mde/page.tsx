'use client'

import dynamic from "next/dynamic";

import { Suspense } from "react";

const EditorComp = dynamic(() => import('../ui/EditorComponent'), {ssr:false})

const markdown = `
Hellow **work** !
`

export default function Page() {

    return (
            <Suspense fallback={<div>Loading editor....</div>}>
                <EditorComp 
                    initialMarkdown={`
# Hello Work 👋

- Write markdown
- Add tables, images, or code blocks
- Use shortcuts like \`**bold**\` or \`# heading\`
                        
                        `}
                />
            </Suspense>
    )
}



