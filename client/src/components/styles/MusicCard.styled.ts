import styled from 'styled-components'

export const Card = styled.div`
  --br: 10px;
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  border: 1px solid white;

  img {
    width: 100%;
    border-radius: var(--br) var(--br) 0 0;
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: hsl(var(--clr-light) / .9);
  }

  p {
    margin-top: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: hsl(var(--clr-light));
    font-family: var(--ff-sans-cond);
  }
`

export const CardBadge = styled.div`
  font-size: 0.9rem;
  padding-block: 0.1rem;
  padding-inline: 1rem;
  font-weight: 700;
  border: 1px solid hsl(var(--clr-light));
  border-radius: 10px;
  color: hsl(var(--clr-light));
`

export const CardHeader = styled.div``
