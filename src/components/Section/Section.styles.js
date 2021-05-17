import styled, { keyframes } from "styled-components";

const Bounce = keyframes`
    0%, 20%, 50%, 80%, 100%{
        transform: translateY(0);
    }

    40% {
        transform: translateY(5px)
    }

    60% {
        transform: translateY(3px)
    }
`;

export const Section = styled.div`
  height: 100vh;
  width: 100%;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  scroll-snap-align: start;
`;

export const SectionText = styled.div`
  display: grid;
  place-items: center;

  padding-top: 15vh;
  text-align: center;

  > h1 {
    font-size: 3rem;
    font-weight: 450;
  }

  > p {
    text-transform: capitalize;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
`;

export const SectionButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  opacity: ${({ special }) => (special ? "1" : "0.85")};

  height: 40px;
  width: 256px;
  margin: 8px;

  border: none;
  border-radius: 999px;
  outline: none;

  color: white;

  display: grid;
  place-items: center;

  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;

export const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;

  display: ${({ special }) => (special ? "none" : "block")};
`;

export const DownArrow = styled.img`
  height: 40px;

  animation: ${Bounce} infinite 1.5s;
`;
