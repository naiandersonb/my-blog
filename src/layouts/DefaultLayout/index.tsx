import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../../components/Header'

export const LayoutContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem;
`

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
