import { Header, Input, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <Header>
        <p>Publicações</p>
        <span>6 publicações</span>
      </Header>
      <form action="">
        <Input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
