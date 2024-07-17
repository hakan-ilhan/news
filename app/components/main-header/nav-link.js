"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink() {
  const path = usePathname();

  return (
    <ul>
      <li>
        <Link
          href="/news"
          className={path.startsWith("/news") ? "active" : undefined}
        >
          News
        </Link>
      </li>
      <li>
        <Link
          href="/archive"
          className={path.startsWith("/archive") ? "active" : undefined}
        >
          Archive
        </Link>
      </li>
    </ul>
  );
}

export default NavLink;
