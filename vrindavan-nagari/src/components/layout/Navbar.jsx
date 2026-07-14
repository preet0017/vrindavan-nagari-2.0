import { NavLink } from "react-router-dom";
import Container from "../common/Container";

const leftNav = [
  { title: "About", path: "/about" },
  { title: "Experience", path: "/" },
];

const rightNav = [
  { title: "Gallery", path: "/gallery" },
  { title: "Passes", path: "/passes" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <div className="relative">

          {/* Navigation */}
          <nav
            className="
              grid
              grid-cols-[1fr_auto_1fr]
              items-start
              pt-6
              md:pt-8
              lg:pt-10
            "
          >
            {/* Left */}
            <div
              className="
                hidden
                md:flex
                justify-end
                gap-8
                lg:gap-16
                pr-8
                lg:pr-24
              "
            >
              {leftNav.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className="nav-link"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            {/* Empty center for grid */}
            <div />

            {/* Right */}
            <div
              className="
                hidden
                md:flex
                justify-start
                gap-8
                lg:gap-16
                pl-8
                lg:pl-24
              "
            >
              {rightNav.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className="nav-link"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Logo */}
          <div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
            "
          >
            <div
              className="
                flex
                h-24
                w-24
                md:h-28
                md:w-28
                lg:h-32
                lg:w-32
                items-center
                justify-center
                rounded-full
                border
                border-[var(--gold)]
                text-[var(--gold)]
                tracking-[0.35em]
                text-sm
                md:text-base
                lg:text-lg
                font-semibold
                backdrop-blur-sm
              "
            >
              LOGO
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="absolute left-0 top-6 md:hidden">
            ☰
          </div>

        </div>
      </Container>
    </header>
  );
}