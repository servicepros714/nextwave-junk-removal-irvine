import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { CheckIcon, PhoneIcon } from './Icons.jsx';
import s from './Sections.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className={s.section}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">Upfront Pricing</span>
          <h2 className="sectionTitle">Simple, Honest Pricing</h2>
          <p className="sectionLead">
            You pay for the space your items take in our truck &mdash; and you&rsquo;ll know the price before we start.
          </p>
        </div>

        <ul className={s.checklist}>
          {business.pricingIncludes.map((item) => (
            <li key={item}>
              <span className={s.checkDot}>
                <CheckIcon width={14} height={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className={s.centerCta}>
          <Link to="/get-estimate" className="btn btnWax">
            Get a Free Estimate
          </Link>
          <a href={business.phone.href} className="btn btnInk">
            <PhoneIcon width={18} height={18} /> {business.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
