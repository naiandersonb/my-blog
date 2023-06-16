import { useEffect, useState } from 'react'
import { getGithubUserProfile } from '../services'

interface GithubProfile {
  avatar_url: string
  bio: string | null
  html_url: string
  location: string
  name: string
  followers: number
  company: string
  login: string
}

export function useUser() {
  const [user, serUser] = useState({} as GithubProfile)

  const handleFetchUserProfile = async () => {
    const userResponse = await getGithubUserProfile('naiandersonb')
    serUser(userResponse)
  }

  useEffect(() => {
    handleFetchUserProfile()
  }, [])

  return { user }
}
