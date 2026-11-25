import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={close}>Harsh Tirlotkar</a>
        <span className="nav-divider" />
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={close}>{link}</a>)}
        </div>
      </nav>
    </header>
  );
}
