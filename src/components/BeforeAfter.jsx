import { useState } from 'react';
import business from '../data/business.js';
import s from './Sections.module.css';

function Compare({ item }) {
  const [pos, setPos] = useState(50);

  return (
    <figure className={s.compare}>
      <div className={s.compareFrame}>
        <img src={item.after} alt={`${item.label} after NextWave cleared it`} className={s.compareImg} loading="lazy" />
        <img
          src={item.before}
          alt={`${item.label} before junk removal`}
          className={s.compareImg}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          loading="lazy"
        />
        <span className={`${s.compareTag} ${s.tagBefore}`}>Before</span>
        <span className={`${s.compareTag} ${s.tagAfter}`}>After</span>
        <span className={s.compareHandle} style={{ left: `${pos}%` }} aria-hidden="true">
          <span className={s.compareKnob}>&#8596;</span>
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className={s.compareRange}
          aria-label={`Drag to compare before and after: ${item.label}`}
        />
      </div>
      <figcaption className={s.compareCaption}>{item.label}</figcaption>
    </figure>
  );
}

export default function BeforeAfter() {
  if (!business.beforeAfter.length) return null;

  return (
    <section id="our-work" className={`${s.section} ${s.ink}`}>
      <div className="container">
        <div className="sectionHead">
          <span className={`eyebrow ${s.eyebrowLight}`}>Our Work</span>
          <h2 className="sectionTitle">Before &amp; After</h2>
          <p className={`sectionLead ${s.leadLight}`}>Real jobs from our crew. Drag the slider to see the difference.</p>
        </div>
        <div className={s.compareGrid}>
          {business.beforeAfter.map((item) => (
            <Compare key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
