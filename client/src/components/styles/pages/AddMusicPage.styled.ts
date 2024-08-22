import styled from 'styled-components'

export const Container = styled.main`
  --br: 8px;
  max-width: max(20rem, 80%);
  margin-inline: auto;

  h1 {
    font-size: 2rem;
  }
`

export const StyledForm = styled.div`
  display: grid;
  margin-top: 1rem;
  --grid-gap: 1rem;
  font-size: 1rem;
  gap: var(--grid-gap, 2rem);
  grid-template-columns: 100%;

  @media (min-width: 35rem) {
    grid-template-columns: repeat(2, minmax(0, 30rem));
  }
`
