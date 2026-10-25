import business from '../data/business.js';
import s from './Sections.module.css';

export default function About() {
  return (
    <section id="about" className={s.section}>
      <div className={`container ${s.about}`}>
        <span className="eyebrow">About Us</span>
        <h2 className="sectionTitle">Irvine&rsquo;s Clean-Slate Crew</h2>
        <p className={s.aboutText}>
          NextWave Junk Removal Irvine started with a simple idea: getting rid of junk should feel like a fresh start, not another chore. We show up on time, give you a straight price, and do all the heavy lifting &mdash; from a single couch to a garage that hasn&rsquo;t seen a car in years.
        </p>
        <p className={s.aboutText}>
          We&rsquo;re local to {business.city}, so we treat every driveway, hallway and backyard like it&rsquo;s in our own neighborhood. Before anything heads to the landfill, we sort out what can be donated or recycled. Then we sweep up and leave the space ready for whatever comes next.
        </p>
        <div className={s.aboutRule} aria-hidden="true">
          <span>&#9733;</span> {business.city.toUpperCase()} <span>&#9733;</span>
        </div>
      </div>
    </section>
  );
}
