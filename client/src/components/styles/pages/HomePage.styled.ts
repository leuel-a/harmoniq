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
  gap: .5rem;

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
