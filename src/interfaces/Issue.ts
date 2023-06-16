import { GithubProfile } from './GitHubProfile'

export interface Issue {
  id: string
  number: number
  html_url: string
  title: string
  user: GithubProfile
  comments: number
  created_at: string
  body: string
}
