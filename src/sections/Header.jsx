import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4">
    {title}
  </LinkScroll>
);

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full py-10">
      <div className="max-lg:p-x5 container flex h-14 items-center">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src="/images/xora.svg" alt="logo" width={115} height={55} />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2",
            !openNav ? "max-lg:opacity-0" : "",
          )}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-5 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "cursor-pointer transition-transform duration-500 max-lg:hidden",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="absolute left-0 top-1/2 block h-[380px] w-[960px] -translate-y-1/2 translate-x-[-290px] rotate-90 lg:hidden">
              <img
                src="/images/bg-outlines.svg"
                alt="outline "
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline "
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>

        <button
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 lg:hidden"
          onClick={() => setOpenNav((show) => !show)}
        >
          <img
            src={`/images/${openNav ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
