import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PhoneIcon } from './Icons.jsx';
import s from './Sections.module.css';

export default function CtaBand() {
  return (
    <section className={s.ctaBand}>
      <div className={`container ${s.ctaInner}`}>
        <div>
          <h2 className={s.ctaTitle}>Ready for a clear space?</h2>
          <p className={s.ctaText}>Free, no-obligation estimates for {business.serviceAreaLabel}.</p>
        </div>
        <div className={s.ctaBtns}>
          <Link to="/get-estimate" className="btn btnInk">
            Get a Free Estimate
          </Link>
          <a href={business.phone.href} className={`btn ${s.ctaCall}`}>
            <PhoneIcon width={18} height={18} /> {business.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
