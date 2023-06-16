import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import { Issue } from '../../interfaces/Issue'
import { defaultTheme as theme } from '../../styles/themes/default'
import { dateFormat } from '../../utils/dateFormat'
import { BackButton, Footer, LinkButton, PostContainer } from './styles'

interface PostHeaderProps {
  post: Issue
}
export function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostContainer>
      <header>
        <BackButton to="/">
          <CaretLeft size={20} />
          Voltar
        </BackButton>

        <LinkButton href={post.html_url} target="_blank">
          <span>Ver no github</span>
          <ArrowSquareOut size={20} />
        </LinkButton>
      </header>

      <h2>{post?.title}</h2>

      <Footer>
        <li>
          <GithubLogo size={24} color={theme['base-label']} weight="fill" />
          <p>{post?.user?.login}</p>
        </li>
        <li>
          <CalendarBlank size={24} color={theme['base-label']} weight="fill" />
          <p>{post?.created_at ? dateFormat(post.created_at) : ''}</p>
        </li>
        <li>
          <ChatCircle size={24} color={theme['base-label']} weight="fill" />
          <p>{post?.comments} comentários</p>
        </li>
      </Footer>
    </PostContainer>
  )
}
