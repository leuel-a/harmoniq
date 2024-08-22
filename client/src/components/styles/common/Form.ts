import styled from 'styled-components'

export const FormControl = styled.div`
  width: 100%;
`

export const Label = styled.label`
  font-size: 1.1rem;
  display: inline-block;
  padding-block: 5px;
`

export const Input = styled.input`
  background-color: transparent;

  width: 100%;
  padding-block: 1rem;
  border: 1px solid hsl(var(--clr-white));
  padding-inline: 1rem;
  border-radius: var(--br, 1rem);
`

export const Button = styled.button`
  background-color: hsl(var(--clr-white));
  padding-block: 1rem;
  border-radius: var(--br, 1rem);
`
