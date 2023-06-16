import { Issue } from '../../interfaces/Issue'
import { dateFormat } from '../../utils/dateFormat'
import { textSlicer } from '../../utils/textSlicer'
import { MarkdownContent } from '../MarkdownContent'
import { Card } from '../Posts/styles'

export function PostCard({ issue }: { issue: Issue }) {
  const createdAt = dateFormat(issue.created_at)
  const textSliced = textSlicer(issue.body, 300)

  return (
    <Card to={`/post/${issue.number}`}>
      <header>
        <h3>{issue.title}</h3>
        <span>{createdAt}</span>
      </header>
      <MarkdownContent text={textSliced} />
    </Card>
  )
}
