import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { ServiceIcon } from './Icons.jsx';
import s from './Sections.module.css';

export default function Services() {
  return (
    <section id="services" className={s.section}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">What We Haul</span>
          <h2 className="sectionTitle">Junk Removal Services</h2>
          <p className="sectionLead">
            One call clears it all. If two people can carry it and it isn&rsquo;t hazardous, our crew can haul it away.
          </p>
        </div>

        <div className={s.serviceGrid}>
          {business.services.map((svc, i) => (
            <article key={svc.title} className={s.serviceCard}>
              <div className={s.serviceTop}>
                <span className={s.serviceIcon}>
                  <ServiceIcon name={svc.icon} />
                </span>
                <span className={s.serviceNum}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={s.serviceTitle}>{svc.title}</h3>
              <p className={s.serviceText}>{svc.text}</p>
            </article>
          ))}
        </div>

        <div className={s.centerCta}>
          <Link to="/get-estimate" className="btn btnWax">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
