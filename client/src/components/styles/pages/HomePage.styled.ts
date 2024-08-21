import styled from 'styled-components'

export const HomePageFilters = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
  gap: 1rem;

  @media (min-width: 45rem) {
    flex-direction: row;
    padding-inline: clamp(4rem, 5vw + 1rem, 10rem);
    justify-content: space-between;
  }
`
export const GenreFilters = styled.div`
  gap: 0.5rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const GenreButton = styled.button`
  border: 0;
  background-color: hsl(var(--clr-dark));
  padding-block: 0.25rem;
  padding-inline: 1rem;
  border: 1px solid hsl(var(--clr-white));
  border-radius: 8px;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: hsl(var(--clr-accent));
`

export const SearchInput = styled.input`
  background-color: inherit;
  padding-block: 0.8rem;
  padding-inline: 2rem;
  font-size: 0.925rem;
  width: 100%;
  color: hsl(var(--clr-white));
  border: 1px solid hsl(var(--clr-white));
  border-radius: 8px;

  @media (min-width: 45em) {
    width: 30%;
  }

  &::placeholder {
    color: hsl(var(--clr-white));
  }

  &:focus {
    outline: none;
  }
`

export const MusicGrid = styled.div`
  display: grid;
  margin-block: 2rem;
  grid-template-columns: minmax(2rem, 1fr) minmax(0, 80rem) minmax(2rem, 1fr);

  & > :first-child {
    display: grid;
    grid-column: 2;

    grid-template-columns: repeat(1, minmax(0, 40rem));
    gap: 1rem;
  }

  @media (min-width: 35rem) {
    & > :first-child {
      grid-template-columns: repeat(2, minmax(0, 40rem));
    }
  }

  @media (min-width: 45rem) {
    & > :first-child {
      grid-template-columns: repeat(3, minmax(0, 40rem));
    }
  }

  @media (min-width: 55rem) {
    & > :first-child {
      grid-template-columns: repeat(4, minmax(0, 40rem));
    }
  }
`
