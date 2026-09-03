import { contact } from "../data/contact.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {contact.name}. Built with React & Vite.
      </p>
    </footer>
  );
}
