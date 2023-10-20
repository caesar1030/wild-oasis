import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  height: 6.4rem;
  border: 5px solid var(--color-brand-600);
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
