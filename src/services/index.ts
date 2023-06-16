import { GithubProfile } from '../interfaces/GitHubProfile'
import { Issue } from '../interfaces/Issue'
import { api } from '../lib/axios'

export async function getGithubUserProfile(
  userName: string,
): Promise<GithubProfile> {
  const { data } = await api.get(`/users/${userName}`)

  return data
}

export async function fetchIssues(
  userName: string,
  repo: string,
  issueNumber?: number,
): Promise<Issue[] | Issue> {
  let baseURL = `/repos/${userName}/${repo}/issues`

  if (issueNumber) {
    baseURL = `${baseURL}/${issueNumber}`
  }

  const { data } = await api.get(baseURL)

  return data
}
