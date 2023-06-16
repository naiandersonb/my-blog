import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { useUser } from '../../hooks/useUser'
import { defaultTheme as theme } from '../../styles/themes/default'
import { Link, ProfileContainer, ProfileFooter, ProfileHeader } from './styles'

export function Profile() {
  const { user } = useUser()

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <ProfileHeader>
          <h2>{user.name}</h2>
          <Link href={user.html_url} target="_blank" rel="noreferrer">
            Github
            <span>
              <ArrowSquareOut size={20} weight="fill" />
            </span>
          </Link>
        </ProfileHeader>
        {user.bio ? <p>{user.bio}</p> : null}

        <ProfileFooter>
          <div>
            <GithubLogo size={24} color={theme['base-label']} weight="fill" />
            <p>{user.login}</p>
          </div>
          {user.company ? (
            <div>
              <Buildings size={24} color={theme['base-label']} weight="fill" />
              <p>{user.company}</p>
            </div>
          ) : null}
          <div>
            <Users size={24} color={theme['base-label']} weight="fill" />
            <p>{user.followers}</p>
          </div>
        </ProfileFooter>
      </div>
    </ProfileContainer>
  )
}
