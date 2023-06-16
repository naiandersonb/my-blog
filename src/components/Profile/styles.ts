import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem;
  margin-top: -80px;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  display: flex;
  align-items: center;
  gap: 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    max-width: 200px;
    border-radius: 10px;
  }
`

export const ProfileHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1rem;
`

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.blue};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: border-bottom 0.4s;
  }
`

export const ProfileFooter = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
