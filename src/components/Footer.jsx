import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon, PinIcon, ClockIcon, WaveDivider } from './Icons.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <WaveDivider fill="var(--ink)" className={styles.wave} />
      <div className={styles.body}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.brandCol}>
            <div className={styles.logoPlate}>
              <img src={business.logo} alt={business.logoAlt} className={styles.logo} width="132" height="96" />
            </div>
            <p className={styles.blurb}>
              Local junk removal for {business.serviceAreaLabel}. Upfront pricing, careful crews and a clean space when we leave.
            </p>
          </div>

          <div>
            <h3 className={styles.colTitle}>Explore</h3>
            <ul className={styles.list}>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
              <li><Link to="/#our-work">Our Work</Link></li>
              <li><Link to="/#service-area">Service Area</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
              <li><Link to="/get-estimate">Get a Free Estimate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.list}>
              {business.services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={`${styles.list} ${styles.contact}`}>
              <li>
                <PhoneIcon width={17} height={17} />
                <a href={business.phone.href}>{business.phone.display}</a>
              </li>
              <li>
                <PinIcon width={17} height={17} />
                <span>{business.city}, {business.state}</span>
              </li>
              <li>
                <ClockIcon width={17} height={17} />
                <span>{business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`container ${styles.bottom}`}>
          <span>&copy; {year} {business.name}. All rights reserved.</span>
          <span>&#9733; Serving {business.serviceAreaLabel} &#9733;</span>
        </div>
      </div>
    </footer>
  );
}
