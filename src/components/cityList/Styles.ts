import styled from 'styled-components'

export const List = styled.ul`
  background-color: hsl(var(--white));
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  width: 100%;
`

export const Item = styled.li`
  padding: 1.2rem;
  background-color: hsl(var(--c-grey));
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.12s ease-in-out background-color;

  &:hover {
    background-color: hsl(var(--c-grey-dark));
  }

  &:active,
  &.active {
    background-color: hsl(var(--c-grey-darker));
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CityName = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CityTemp = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
`

export const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    display: none;
  }
`

export const WindSpeed = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  color: hsl(var(--c-secondary));
`

export const TemperatureMaxMin = styled.div`
  display: flex;

  span {
    font-weight: 300;
    font-size: 1.2rem;
    color: hsl(var(--c-secondary));
  }
`
