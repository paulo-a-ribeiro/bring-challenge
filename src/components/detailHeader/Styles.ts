import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
  margin-top: 2rem;

  .test {
    width: 100%;
    height: 30px;

    &.sunny {
      background: rgb(43, 116, 227);
      background: linear-gradient(
        142deg,
        rgba(43, 116, 227, 1) 0%,
        rgba(25, 95, 196, 1) 100%
      );
    }
  }
`

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 300;
`

export const Temperature = styled.span`
  font-size: 6rem;
  font-weight: 600;
  line-height: 1;
`

export const TemperatureMaxMin = styled.div`
  display: flex;
  gap: 1rem;

  span {
    font-weight: 400;
    color: hsl(var(--c-secondary));
  }
`

export const Description = styled.span`
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 400;
`
