import Link from "next/link";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <NavLink />
      </nav>
    </header>
  );
}

export default MainHeader;
