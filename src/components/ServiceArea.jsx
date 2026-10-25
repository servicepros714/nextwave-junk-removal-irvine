import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { PinIcon } from './Icons.jsx';
import s from './Sections.module.css';

export default function ServiceArea() {
  const { neighborhoods, nearby } = business.serviceAreas;

  return (
    <section id="service-area" className={`${s.section} ${s.pacific}`}>
      <div className="container">
        <div className="sectionHead">
          <span className={`eyebrow ${s.eyebrowLight}`}>Service Area</span>
          <h2 className="sectionTitle">{business.serviceAreaLabel}</h2>
          <p className={`sectionLead ${s.leadLight}`}>
            Based in {business.city} and hauling throughout the villages and the cities right next door.
          </p>
        </div>

        <div className={s.areaCols}>
          <div className={s.areaBox}>
            <h3 className={s.areaTitle}>Around {business.city}</h3>
            <ul className={s.areaList}>
              {neighborhoods.map((n) => (
                <li key={n}>
                  <PinIcon width={15} height={15} /> {n}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.areaBox}>
            <h3 className={s.areaTitle}>Nearby Cities</h3>
            <ul className={s.areaList}>
              {nearby.map((n) => (
                <li key={n}>
                  <PinIcon width={15} height={15} /> {n}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={s.areaNote}>
          Don&rsquo;t see your street? <Link to="/get-estimate">Request an estimate</Link> and we&rsquo;ll let you know.
        </p>
      </div>
    </section>
  );
}
