import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 1000;
  justify-content: space-between;
  padding-inline: clamp(0.5rem, 5vw, 8rem);
  padding-block: 2rem;
`

export const StyledNav = styled.nav``

export const StyledNavList = styled.ul`
  display: flex;
  gap: var(--flex-gap, 4rem);

  a {
    color: hsl(var(--clr-light));
    text-decoration: none;
  }

  li {
    /* padding-inline: 2rem; */
  }

  @media (max-width: 45rem) {
    position: fixed;
    inset: 0 0 0 30%;
    --flex-gap: 1rem;
    padding: 8rem 2.5rem;
    flex-direction: column;
    background-color: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(10px);
    transition: transform 500ms ease-out;

    &[data-expanded='true'][data-mobile='true'] {
      transform: translateX(0%);
    }

    &[data-expanded='false'][data-mobile='true'] {
      transform: translateX(100%);
    }
  }
`

export const StyledNavListItem = styled.li`
  padding-block: 1.2rem;
`
export const StyledHeaderLogo = styled.h1`
  color: var(--clr-accent);
  font-size: clamp(2rem, 2vw + 1rem, 2.5rem);
  font-family: var(--ff-sans-curs);
`

export const StyledMobileNavToggleButton = styled.button<{
  $isMobile: boolean
  $isExpanded: boolean
}>`
  --close-url: '../../images/icon-close.svg';
  --burger-url: '../../images/icon-hamburger.svg';

  display: none;
  width: 1.5rem;
  aspect-ratio: 1;
  background-color: transparent;
  cursor: pointer;
  background-image: ${props =>
    props.$isMobile && props.$isExpanded
      ? "url('../images/icon-close.svg')"
      : "url('../images/icon-hamburger.svg')"};
  background-repeat: no-repeat;
  border: 0;
  position: absolute;
  right: clamp(1rem, 5vw, 3rem);
  top: 3rem;
  z-index: 9999;

  @media (max-width: 45rem) {
    display: block;
  }
`
