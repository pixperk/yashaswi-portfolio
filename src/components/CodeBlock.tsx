import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  language: string
  value: string
}

export default function CodeBlock({ language, value }: CodeBlockProps) {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} className="rounded-md">
      {value}
    </SyntaxHighlighter>
  )
}

