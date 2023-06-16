import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContent } from '../../components/PostContent'
import { PostHeader } from '../../components/PostHeader'
import { useIssue } from '../../hooks/useIssue'
import { Issue } from '../../interfaces/Issue'

export function Post() {
  const [post, setPost] = useState({} as Issue)
  const routeParams = useParams()
  const { getPostById } = useIssue()

  async function handleGetPost(id: string) {
    const _id = Number(id)
    const post = await getPostById(_id)
    if (!Array.isArray(post)) setPost(post)
  }

  useEffect(() => {
    if (routeParams.id) handleGetPost(routeParams.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeParams])

  return (
    <>
      <PostHeader post={post} />
      <PostContent content={post.body} />
    </>
  )
}
