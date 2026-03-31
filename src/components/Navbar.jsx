import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/television", label: "Television" },
  { to: "/mobile", label: "Mobile" },
  { to: "/components", label: "Components" },
  { to: "/quiz", label: "Quiz" },
  { to: "/register", label: "Register" },
  { to: "/certificate", label: "Certificate" },
  { to: "/feedback", label: "Feedback" },
  { to: "/references", label: "References" },
];

function Navbar() {
  return (
    <header>
      <h2>Electronics Learning</h2>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
