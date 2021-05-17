import * as s from "./Header.styles";
import Logo from "../../images/logo.svg";
import { Menu } from "@material-ui/icons";

import Link from "next/link";
import SidebarNav from "./SidebarNav/SidebarNav";
import { useState } from "react";
import { IconButton } from "@material-ui/core";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <s.Header>
      <Link href="/">
        <s.Logo>
          <img src={Logo} alt="Logo" />
        </s.Logo>
      </Link>
      <s.Menu>
        <p>
          <Link href="#">Model S</Link>
        </p>
        <p>
          <Link href="#">Model 3</Link>
        </p>
        <p>
          <Link href="#">Model X</Link>
        </p>
        <p>
          <Link href="#">Model Y</Link>
        </p>
        <p>
          <Link href="#">Solar Roof</Link>
        </p>
        <p>
          <Link href="#">Solar Panel</Link>
        </p>
      </s.Menu>
      <s.RightMenu>
        <p>
          <Link href="#">Shop</Link>
        </p>
        <p>
          <Link href="#">Tesla Account</Link>
        </p>
        <p>
          <IconButton>
            <Menu
              onClick={() => {
                setSidebarOpen(true);
              }}
            />
          </IconButton>
        </p>
      </s.RightMenu>
      <SidebarNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </s.Header>
  );
};

export default Header;
