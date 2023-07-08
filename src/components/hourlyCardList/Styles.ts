import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  gap: 1.4rem;
  width: 100%;
  overflow-x: scroll;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--c-white));
  gap: 0.1rem;
  padding: 1.2rem 2.4rem;
  border-radius: 1.2rem;
  margin-right: 1.4rem;
`

export const Temperature = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`

export const Hour = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
`
