import Link from "next/link";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/archive">Archive</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
