import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem;
  margin-top: -80px;
  border-radius: 10px;

  h2 {
    margin-top: 1rem;
    padding: 1rem 0;
    color: ${(props) => props.theme['base-title']};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const BackButton = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.blue};
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
`

export const LinkButton = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.blue};
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.2rem;
`

export const Footer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
