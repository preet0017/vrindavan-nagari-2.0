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
        <div className="relative pt-8 md:pt-10 lg:pt-12">

          {/* Logo */}

          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
            <img
              src="/src/assets/images/logo/logo.png"
              alt="Vrindavan Nagari"
              className="
                w-36
                md:w-44
                lg:w-52
                object-contain
                select-none
                pointer-events-none
              "
            />
          </div>

          {/* Navigation */}

          <div className="grid grid-cols-[1fr_auto_1fr] items-start">

            {/* LEFT */}

            <div className="hidden md:flex justify-end gap-10 lg:gap-16 pt-10">

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

            {/* Spacer */}

            <div className="w-40 md:w-52 lg:w-60" />

            {/* RIGHT */}

            <div className="hidden md:flex justify-start gap-10 lg:gap-16 pt-10">

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

          </div>

        </div>
      </Container>
    </header>
  );
}