import ReactMarkdown from 'react-markdown'

interface MarkdownContentProps {
  text: string
}
export function MarkdownContent({ text }: MarkdownContentProps) {
  return <ReactMarkdown>{text}</ReactMarkdown>
}
