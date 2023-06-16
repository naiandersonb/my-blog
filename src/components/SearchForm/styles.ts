import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  margin-top: 4rem;

  form {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const Input = styled.input`
  background: ${(props) => props.theme['base-input']};
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-border']};
  padding: 0.8rem;
  border-radius: 8px;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
