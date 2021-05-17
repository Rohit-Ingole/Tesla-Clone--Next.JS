import styled from "styled-components";

export const Header = styled.div`
  min-height: 60px;
  width: 100%;
  padding: 0 20px;

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
`;

export const Logo = styled.div`
  width: 230px;

  @media screen and (max-width: 1120px) {
    width: 100px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 1;

  > p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  min-width: 230px;

  > p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    cursor: pointer;

    > .MuiSvgIcon-root {
      margin-top: 3px;
    }
  }
`;
