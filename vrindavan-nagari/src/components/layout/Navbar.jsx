import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import logo from "../../assets/images/logo/logo.png";

const leftNav = [
  { title: "About", path: "/about" },
  { title: "Experience", path: "/" },
];

const rightNav = [
  { title: "Gallery", path: "/gallery" },
  { title: "Passes", path: "/passes" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 left-0 w-full z-50">
      <Container className="">
        {/* ── Single-row 5-column grid ── */}
        <div
          className="
            hidden md:grid
            w-full
            pt-10 lg:pt-12
            items-center
          "
          style={{ gridTemplateColumns: "1fr 1fr auto 1fr 1fr" }}
        >
          {/* Col 1 – About */}
          <div className="flex justify-center pr-8 lg:pr-12">
            <NavLink to={leftNav[0].path} className="nav-link">
              {leftNav[0].title}
            </NavLink>
          </div>

          {/* Col 2 – Experience */}
          <div className="flex justify-center pr-8 lg:pr-12">
            <NavLink to={leftNav[1].path} className="nav-link">
              {leftNav[1].title}
            </NavLink>
          </div>

          {/* Col 3 – Logo (center anchor) */}
          <div className="flex justify-center px-6 lg:px-10">
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
              "
            />
          </div>

          {/* Col 4 – Gallery */}
          <div className="flex justify-center pl-8 lg:pl-12">
            <NavLink to={rightNav[0].path} className="nav-link">
              {rightNav[0].title}
            </NavLink>
          </div>

          {/* Col 5 – Passes */}
          <div className="flex justify-center pl-8 lg:pl-12">
            <NavLink to={rightNav[1].path} className="nav-link">
              {rightNav[1].title}
            </NavLink>
          </div>
        </div>

        {/* ── Mobile row: logo + hamburger ── */}
        <div className="flex md:hidden items-center justify-between pt-10">
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

        {/* ── Mobile drawer ── */}
        {menuOpen && (
          <nav className="flex md:hidden flex-col items-center gap-8 py-10">
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