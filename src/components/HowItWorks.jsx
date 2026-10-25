import business from '../data/business.js';
import s from './Sections.module.css';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`${s.section} ${s.sand}`}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">How It Works</span>
          <h2 className="sectionTitle">Three Steps to a Clear Space</h2>
        </div>

        <ol className={s.steps}>
          {business.steps.map((step, i) => (
            <li key={step.title} className={s.step}>
              <span className={s.stepNum}>{i + 1}</span>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
