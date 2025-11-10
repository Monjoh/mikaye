'use client';
import '@mdxeditor/editor/style.css'

import {
  MDXEditor,
  MDXEditorMethods,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  linkPlugin,
  tablePlugin,
  codeBlockPlugin,
  imagePlugin,
  frontmatterPlugin,
  markdownShortcutPlugin
} from '@mdxeditor/editor';
import { FC, useRef } from "react";


interface EditorProps {
    initialMarkdown: string;
    // markdown: string;
    // onChange: (markdown: string) => void;
    // editorRef?: React.RefObject<MDXEditorMethods | null>
}


const Editor: FC<EditorProps> = ({ initialMarkdown }) => {
    const editorRef = useRef<MDXEditorMethods>(null);


    return (
        <MDXEditor 
            ref = {editorRef}
            markdown={initialMarkdown}
            onChange={(md) => {
                console.log(md)
            }}
            plugins={[
                toolbarPlugin({
                    toolbarClassName: 'my-classname',
                    toolbarContents: () => (
                        <>
                            <UndoRedo/>
                            <BoldItalicUnderlineToggles/>
                        </>
                    )
                }),
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                linkPlugin(),
                tablePlugin(),
                codeBlockPlugin(),
                imagePlugin(),
                frontmatterPlugin(),
                markdownShortcutPlugin(),
            ]}
        />
    );
};

export default Editor;