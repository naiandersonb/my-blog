import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const Card = styled(Link)`
  text-decoration: none;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-border']};
    transition: border 0.2s;
  }
  header {
    display: grid;
    grid-template-columns: 75% 1fr;

    h3 {
      color: ${(props) => props.theme['base-text']};
      font-size: 1.5rem;
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      justify-self: flex-end;
      font-size: 0.75rem;
    }
  }

  p {
    margin-top: 1rem;
    line-height: 150%;
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
`
