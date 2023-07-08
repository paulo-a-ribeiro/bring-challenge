import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

export const List = styled.nav`
  min-width: 32rem;
  padding: 1.2rem;
  background-color: hsl(var(--c-white));
`

export const Content = styled.div`
  width: 100%;
  max-width: 100rem;
  min-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(43, 116, 227);
  background: linear-gradient(
    142deg,
    rgba(43, 116, 227, 1) 0%,
    rgba(25, 95, 196, 1) 100%
  );
  z-index: 1;
  opacity: 0.1;
`
