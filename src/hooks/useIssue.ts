import { useEffect, useState } from 'react'
import { Issue } from '../interfaces/Issue'
import { fetchIssues } from '../services'

export function useIssue() {
  const [issues, seIssues] = useState<Issue[]>([])

  const handleFetchIssues = async () => {
    const issuesResponse = await fetchIssues('naiandersonb', 'my-blog')
    if (Array.isArray(issuesResponse)) seIssues(issuesResponse)
  }

  const getPostById = async (id: number) => {
    const post = await fetchIssues('naiandersonb', 'my-blog', id)
    return post
  }

  useEffect(() => {
    handleFetchIssues()
  }, [])

  return { issues, getPostById }
}
