import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons.jsx';
import styles from './Header.module.css';

const nav = [
  { label: 'Services', to: '/#services' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Our Work', to: '/#our-work' },
  { label: 'Service Area', to: '/#service-area' },
  { label: 'FAQ', to: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${business.name} home`} onClick={() => setOpen(false)}>
          <img src={business.logo} alt={business.logoAlt} className={styles.logo} width="88" height="64" />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={business.phone.href} className={styles.phone}>
            <PhoneIcon width={18} height={18} />
            <span>{business.phone.display}</span>
          </a>
          <Link to="/get-estimate" className={`btn btnWax ${styles.cta}`}>
            Get a Free Estimate
          </Link>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerNav} aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.drawerActions}>
          <Link to="/get-estimate" className="btn btnWax" onClick={() => setOpen(false)}>
            Get a Free Estimate
          </Link>
          <a href={business.phone.href} className="btn btnInk">
            <PhoneIcon width={18} height={18} /> Call {business.phone.display}
          </a>
        </div>
      </div>
    </header>
  );
}
