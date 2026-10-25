import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon, CheckIcon, WaveDivider } from './Icons.jsx';
import styles from './Hero.module.css';

const chips = ['Upfront pricing', 'Same-week pickup', 'Donate & recycle first'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.lines} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>&#9733; {business.city}, {business.state} &middot; Junk Removal &#9733;</span>
          <h1 className={styles.title}>
            <span className={styles.kicker}>Irvine Junk Removal</span>
            Clear it out.
            <span className={styles.accent}>Start fresh.</span>
          </h1>
          <p className={styles.lead}>
            Furniture, appliances, garage piles and backyard debris &mdash; NextWave hauls it all away from {business.serviceAreaLabel}, with the price confirmed before we lift a thing.
          </p>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btnWax">
              Get a Free Estimate
            </Link>
            <a href={business.phone.href} className="btn btnGhostLight">
              <PhoneIcon width={18} height={18} /> {business.phone.display}
            </a>
          </div>
          <ul className={styles.chips}>
            {chips.map((c) => (
              <li key={c}>
                <span className={styles.chipCheck}><CheckIcon width={12} height={12} /></span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.plate}>
            <img src={business.logo} alt={business.logoAlt} className={styles.emblem} width="440" height="320" />
          </div>
          <div className={styles.stamp} aria-hidden="true">
            <span>Free</span>
            <strong>Estimates</strong>
            <span>&#9733; &#9733; &#9733;</span>
          </div>
        </div>
      </div>
      <WaveDivider fill="var(--paper)" className={styles.wave} />
    </section>
  );
}
