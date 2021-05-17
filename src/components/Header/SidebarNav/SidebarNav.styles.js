import styled from "styled-components";

export const SidebarNav = styled.div`
  position: absolute;

  height: 100vh;
  width: 300px;
  padding: 20px;

  background: white;

  transition: 500ms ease-in-out;

  top: 0;
  right: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-100%")};

  > ul {
    list-style: none;

    li {
      text-align: left;

      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      a {
        font-weight: 600;
      }
    }
  }
`;
