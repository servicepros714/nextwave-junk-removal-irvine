import business from '../data/business.js';
import { StarIcon } from './Icons.jsx';
import s from './Sections.module.css';

export default function Reviews() {
  const hasReviews = business.reviews.length > 0;

  return (
    <section id="reviews" className={`${s.section} ${s.sand}`}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">{hasReviews ? 'Customer Reviews' : 'Why NextWave'}</span>
          <h2 className="sectionTitle">{hasReviews ? 'What Neighbors Are Saying' : 'The NextWave Promise'}</h2>
        </div>

        {hasReviews ? (
          <div className={s.reviewGrid}>
            {business.reviews.map((r) => (
              <figure key={r.name + r.text.slice(0, 12)} className={s.reviewCard}>
                <div className={s.stars} aria-label={`${r.rating || 5} out of 5 stars`}>
                  {Array.from({ length: r.rating || 5 }).map((_, i) => (
                    <StarIcon key={i} width={18} height={18} />
                  ))}
                </div>
                <blockquote className={s.reviewText}>{r.text}</blockquote>
                <figcaption className={s.reviewName}>
                  {r.name}
                  {r.area ? <span> &middot; {r.area}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className={s.promiseGrid}>
            {business.whyUs.map((w) => (
              <article key={w.title} className={s.promiseCard}>
                <span className={s.promiseStar}>&#9733;</span>
                <h3 className={s.promiseTitle}>{w.title}</h3>
                <p className={s.promiseText}>{w.text}</p>
              </article>
            ))}
          </div>
        )}

        {business.googleReviewsUrl ? (
          <div className={s.centerCta}>
            <a href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btnInk">
              Read Our Google Reviews
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
