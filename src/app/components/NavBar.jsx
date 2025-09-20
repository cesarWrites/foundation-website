"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css"
import logo from '../../../public/logo.png' 

export default function NavBar() {
    const [active, setActive] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = (item) => {
      setActive(item === active ? null : item);
    };
  
    return (
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
        <Link href="/" passHref>
          <Image src={logo} alt="Logo" width={40} height={40} />
          </Link>
        </div>
  
        {/* Hamburger button for mobile */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
  
        {/* Navbar links */}
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li
            className={`navbar-item ${active === "home" ? "active" : ""}`}
            onClick={() => handleClick("home")}
          >
            <Link href="#">Who We Are</Link>
            <ul className="dropdown">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li className="submenu-right">
                <Link href="#">Our Board of Directors→</Link>
                <ul className="dropdown right">
                  <li>
                    <Link href="#">Sub-Submenu A</Link>
                  </li>
                  <li>
                    <Link href="#">Sub-Submenu B</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Our Founders</Link>
              </li>
            </ul>
          </li>
  
          <li
            className={`navbar-item ${active === "services" ? "active" : ""}`}
            onClick={() => handleClick("services")}
          >
            <Link href="#">What We Do</Link>
            <ul className="dropdown">
              <li>
                <Link href="#">Service 1</Link>
              </li>
              <li>
                <Link href="#">Service 2</Link>
              </li>
            </ul>
          </li>
  
          <li
            className={`navbar-item ${active === "about" ? "active" : ""}`}
            onClick={() => handleClick("about")}
          >
            <Link href="#">Fundraising Activities</Link>
            <ul className="dropdown">
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">History</Link>
              </li>
            </ul>
          </li>
          <li className={`navbar-item ${active === "impact" ? "active" : ""}`}
            onClick={() => handleClick("impact")}>
          <Link href="#">Program Impact</Link>
          </li>
          <li className={`navbar-item ${active === "donate" ? "active" : ""}`}
            onClick={() => handleClick("donate")}>
          <Link href="#">Donate</Link>
          </li>
          <li className={`navbar-item ${active === "volunteer" ? "active" : ""}`}
            onClick={() => handleClick("volunteer")}>
          <Link href="#">Volunteer Form</Link>
          </li>
        </ul>
      </nav>
    );
  }