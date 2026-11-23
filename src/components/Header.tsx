import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#top" aria-label="48x Labs home">
        <img className="header-logo" src="/assets/logo-white.svg" alt="48x Labs" />
      </a>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <a href="#about">About Us</a>
        <a href="#products">Shop</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <div className="header-actions">
        <label className="search">
          <span aria-hidden="true">⌕</span>
          <input aria-label="Search" placeholder="Search" />
        </label>
        <button className="account" aria-label="Account">
          ○
        </button>
        <button className="cart" aria-label="Shopping cart">
          ▢<b>0</b>
        </button>
        <button className="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
