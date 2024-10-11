/* eslint-disable react/no-unknown-property */
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <header>
      <nav className="md:w-11/12 md:mx-auto px-2 md:py-3 py-2 flex items-center justify-between">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div className="md:flex items-center gap-2 hidden">
                <img className="w-full" src="/images/logo.webp" alt="logo" />
                <h2 className="text-xl md:text-2xl font-bold">Peddy</h2>
              </div>
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost btn-circle md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow md:hidden"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <div className="flex items-center gap-2 md:hidden">
              <img className="w-8" src="./images/logo.webp" alt="logo" />
              <h2 className="text-xl md:text-2xl font-bold">Peddy</h2>
            </div>
            <ul className="md:flex items-center gap-2 md:gap-6 font-semibold text-gray-600 hidden">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <span className="p-2 border border-emerald-300/50 rounded-full hover:bg-gray-200 cursor-pointer">
              <CgProfile className="text-3xl" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
