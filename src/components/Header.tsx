import { useEffect, useState } from "react";
import { BRAND, PHONE_DISPLAY, PHONE_TEL } from "../config";
import "./Header.css";

const links = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#bang-gia", label: "Bảng giá" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#feedback", label: "Feedback" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`header ${scrolled ? "header--scrolled" : ""} ${open ? "header--open" : ""}`}
    >
      <div className="container header__inner">
        <a href="#top" className="header__brand" aria-label={BRAND} onClick={close}>
          <span className="header__mark">24/7</span>
          <span className="header__name">
            Tài xế <strong>247</strong>
          </span>
        </a>

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="header__phone" href={PHONE_TEL} onClick={close}>
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          className={`header__toggle ${open ? "is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__backdrop ${open ? "is-open" : ""}`}
        onClick={close}
        aria-hidden
      />
    </header>
  );
}
