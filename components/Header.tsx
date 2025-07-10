"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <!-- Header --> */}
      <nav className="flex items-center justify-between  sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md px-4 md:px-8">
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-4 transition-all duration-300">
          <Image
            alt="Coffee shop logo, stylized coffee cup icon in white\n     on black background"
            src={"/logo.png"}
            width={scrolled ? 80 : 155}
            height={scrolled ? 72 : 140.7}
            className={`ml-4 md:ml-0 transition-all duration-300 ${
              scrolled ? "!w-20 !h-18" : "!w-[155px] !h-[140.7px]"
            }`}
          />
        </div>

        {/* <!-- Navigation Links --> */}
        <ul className="hidden  md:flex space-x-18 font-[600] text-white   xl:text-[20px] nav_button ">
          <li className="home">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" text-[#B9B9B9] hover:text-white">
            <Link href={"/"}>About</Link>
          </li>
          <li className=" text-[#B9B9B9] hover:text-white">
            <Link href={"/"}>Shop</Link>
          </li>
          <li className=" text-[#B9B9B9] hover:text-white">
            <Link href={"/"}>Delivery</Link>
          </li>
        </ul>

        {/* <!-- Contact Button --> */}
        <button className="hidden nav_b md:block border border-green-600 text-green-600 px-8 py-3 rounded-md text-sm font-semibold hover:bg-green-600 hover:text-black transition">
          Contact Us
        </button>

        {/* <!-- Mobile Menu Button --> */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white text-2xl focus:outline-none  mr-4"
          id="mobile-menu-button"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {/* Hamburger or Close icon (SVG) */}
          {menuOpen ? (
            // Close (X) icon
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed top-10 left-0 w-full z-40 bg-black bg-opacity-90 text-white px-6 py-4 pt-20 space-y-4 font-semibold text-lg md:hidden transition-all duration-300`}
        id="mobile-menu"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <Link
          className="block hover:text-green-500 transition"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          className="block hover:text-green-500 transition"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          className="block hover:text-green-500 transition"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>
        <Link
          className="block hover:text-green-500 transition"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <button
          className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-black transition"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Header;
