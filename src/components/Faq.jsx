import business from '../data/business.js';
import s from './Sections.module.css';

export default function Faq() {
  return (
    <section id="faq" className={s.section}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">FAQ</span>
          <h2 className="sectionTitle">Questions, Answered</h2>
        </div>
        <div className={s.faqList}>
          {business.faqs.map((f, i) => (
            <details key={f.q} className={s.faqItem} open={i === 0}>
              <summary className={s.faqQ}>
                <span>{f.q}</span>
                <span className={s.faqPlus} aria-hidden="true" />
              </summary>
              <p className={s.faqA}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
