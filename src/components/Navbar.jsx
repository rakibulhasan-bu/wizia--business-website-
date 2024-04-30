import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const navLinks = [
    {
      label: "Home",
      path: "Home",
    },
    {
      label: "About Us",
      path: "AboutUs",
    },
    {
      label: "Pricing",
      path: "Pricing",
    },
    {
      label: "Customers",
      path: "Customers",
    },
    {
      label: "Solutions",
      path: "Solutions",
    },
  ];

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      id="Home"
      className="container flex items-center justify-between py-4 2xl:py-6"
    >
      <img src="/Logo.png" alt="" />
      <div className="flex items-center gap-4 2xl:gap-6">
        <ul className="md:flex hidden md:items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="cursor-pointer hover:text-textSky hover-animation pb-0.5 ">
                {link?.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="appBtn">Book a Demo</button>
        <button className="appOutlineBtn">Contact Us</button>
      </div>
    </header>
  );
};

export default Navbar;
