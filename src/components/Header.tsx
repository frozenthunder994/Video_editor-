"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header">
      <Link href="/" className="logo">
        Frame<span>&</span>Story
      </Link>
      <nav className="nav">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
          >
            {link.name}
          </Link>
        ))}
        {user ? (
          <div className="user-nav">
            <span className="user-email">{user.email?.split("@")[0]}</span>
            <button onClick={logout} className="nav-link logout-btn">Logout</button>
          </div>
        ) : (
          <Link href="/auth" className={`nav-link ${pathname === "/auth" ? "active" : ""}`}>
            Login
          </Link>
        )}
      </nav>
      <style jsx>{`
        .user-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .user-email {
          color: var(--gold);
          font-weight: 700;
          text-transform: lowercase;
        }
        .logout-btn {
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;
