import React from 'react';
import Link from 'next/link';
import './Navbar.css'; // Import the custom CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MIT Portfolio</div>
      <ul className="navbar-menu">
        <li>
          <Link href="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/components/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/components/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
