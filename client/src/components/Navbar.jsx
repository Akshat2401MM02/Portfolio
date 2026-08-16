import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-void/80 backdrop-blur-md border-b border-violet/20"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full p-[2px] bg-grad-primary shrink-0">
            <img
              src="/profile.jpeg"
              alt="Akshat Agrawal"
              className="w-full h-full rounded-full object-cover border-2 border-void"
            />
          </span>
          <span className="font-mono font-bold tracking-wide text-lavender text-lg">
            AA<span className="gradient-text">.</span>
          </span>
        </NavLink>
        <ul className="flex gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-mono uppercase tracking-widest transition-colors ${
                    isActive ? "text-lavender" : "text-mist hover:text-lavender"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 -bottom-[1px] h-[2px] bg-grad-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
