import styled from 'styled-components'

export const LoaderStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  .loader {
    color: hsl(var(--c-primary));
    font-size: 0.7rem;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -2.6rem;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 2.6rem;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2rem 0 -1.8rem;
    }
    40% {
      box-shadow: 0 2rem 0 0;
    }
  }
`
