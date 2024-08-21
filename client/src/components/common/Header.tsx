import { Link } from 'react-router-dom'

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledMobileNavToggleButton,
  StyledNav,
  StyledNavList,
  StyledNavListItem
} from '../styles/Header.styled'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleReszie = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    handleReszie()

    window.addEventListener('resize', handleReszie)
  }, [])

  return (
    <StyledHeader>
      <StyledHeaderLogo>Harmoniq</StyledHeaderLogo>
      <StyledMobileNavToggleButton
        $isMobile={isMobile}
        $isExpanded={expanded}
        onClick={() => setExpanded(prev => !prev)}
      ></StyledMobileNavToggleButton>
      <StyledNav>
        <StyledNavList data-expanded={expanded} data-mobile={isMobile}>
          <StyledNavListItem aria-selected="true">
            <Link to="#">Home</Link>
          </StyledNavListItem>
          <StyledNavListItem aria-selected="false">
            <Link to="#">Stats</Link>
          </StyledNavListItem>
        </StyledNavList>
      </StyledNav>
    </StyledHeader>
  )
}
