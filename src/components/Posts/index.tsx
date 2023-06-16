import { useIssue } from '../../hooks/useIssue'
import { PostCard } from '../PostCard'
import { PostsContainer } from './styles'

export function Posts() {
  const { issues } = useIssue()

  return (
    <PostsContainer>
      {issues &&
        issues.map((issue) => {
          return <PostCard issue={issue} key={issue.id} />
        })}
    </PostsContainer>
  )
}
