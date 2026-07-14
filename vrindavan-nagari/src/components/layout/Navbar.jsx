import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import logo from "../../assets/images/logo/logo.png";

const leftNav = [
  { title: "About", path: "/about" },
  { title: "Location", path: "/" },
];

const rightNav = [
  { title: "Gallery", path: "/gallery" },
  { title: "Privacy Policy", path: "/privacy-policy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-black/30 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <Container>
        {/* ───────── Desktop Navbar ───────── */}
        <div
          className="
            hidden
            md:grid
            w-full
            pt-10
            pb-4
            lg:pt-12
            items-center
          "
          style={{ gridTemplateColumns: "1fr 1fr auto 1fr 1fr" }}
        >
          {/* About */}
          <div className="flex justify-center pr-8 lg:pr-12">
            <NavLink to={leftNav[0].path} className="nav-link">
              {leftNav[0].title}
            </NavLink>
          </div>

          {/* Experience */}
          <div className="flex justify-center pr-8 lg:pr-12">
            <NavLink to={leftNav[1].path} className="nav-link">
              {leftNav[1].title}
            </NavLink>
          </div>

          {/* Logo */}
          <div className="flex justify-center px-6 lg:px-10">
            <a href="#">
              <img
                src={logo}
                alt="Vrindavan Nagari"
                className="
                w-[120px]
                md:w-[160px]
                lg:w-[200px]
                object-contain
                select-none
                pointer-events-none
                transition-all
                duration-500
              "
              />
            </a>
          </div>

          {/* Gallery */}
          <div className="flex justify-center pl-8 lg:pl-12">
            <NavLink to={rightNav[0].path} className="nav-link">
              {rightNav[0].title}
            </NavLink>
          </div>

          {/* Passes */}
          <div className="flex justify-center pl-8 lg:pl-12">
            <NavLink to={rightNav[1].path} className="nav-link">
              {rightNav[1].title}
            </NavLink>
          </div>
        </div>

        {/* ───────── Mobile Navbar ───────── */}
        <div className="flex md:hidden items-center justify-between py-6">
          <img
            src={logo}
            alt="Vrindavan Nagari"
            className="w-[120px] object-contain select-none pointer-events-none"
          />

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white text-3xl leading-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ───────── Mobile Drawer ───────── */}
        {menuOpen && (
          <nav className="flex md:hidden flex-col items-center gap-8 py-8">
            {[...leftNav, ...rightNav].map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}