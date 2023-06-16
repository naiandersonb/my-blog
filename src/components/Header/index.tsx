import { Link } from 'react-router-dom'
import blogLogo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={blogLogo} alt="" />
      </Link>
    </HeaderContainer>
  )
}
