import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map(li => <a href={`#${li}`} key={li}>{li}</a>)
  return <nav>
    {navLinks}
  </nav>
}

export default NavBar;
