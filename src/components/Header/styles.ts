import styled from 'styled-components'
import bgHeader from '../../assets/header-bg.svg'

export const HeaderContainer = styled.header`
  height: 369px;

  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
