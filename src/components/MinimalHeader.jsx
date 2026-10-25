import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon } from './Icons.jsx';
import styles from './MinimalHeader.module.css';

export default function MinimalHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${business.name} home`}>
          <img src={business.logo} alt={business.logoAlt} className={styles.logo} width="76" height="55" />
        </Link>
        <a href={business.phone.href} className={styles.phone}>
          <PhoneIcon width={17} height={17} />
          <span>{business.phone.display}</span>
        </a>
      </div>
    </header>
  );
}
