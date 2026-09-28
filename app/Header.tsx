"use client";

import { useState } from "react";

// Add or remove menu items here. Links point to sections on the same page.
const links = [
  //{ href: "#eventyret", label: "Eventyret" },
  //{ href: "#univers", label: "Universet" },
  //{ href: "#djursland", label: "Djursland" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-compass" src="/compass.png" alt="" width="132" height="156" />
          <span>FERIEEVENTYR</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Luk menu" : "Åbn menu"}</span>
          <span className="bars" aria-hidden="true" />
        </button>
        <nav id="main-menu" className={open ? "menu open" : "menu"} aria-label="Hovedmenu">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
