import Link from "next/link";
import * as s from "./SidebarNav.styles";

import { navData } from "./sidebarNavdata";
import { Close } from "@material-ui/icons";

const SidebarNav = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <s.SidebarNav sidebarOpen={sidebarOpen}>
      <Close onClick={() => setSidebarOpen(false)} />
      <ul>
        {navData.map((item) => (
          <li>
            <Link href="#">
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </s.SidebarNav>
  );
};

export default SidebarNav;
