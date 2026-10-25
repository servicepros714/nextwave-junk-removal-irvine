import { useState } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business.js';
import { CheckIcon, PhoneIcon } from './Icons.jsx';
import styles from './EstimateWizard.module.css';

const STEPS = ['Location', 'Junk Type', 'Your Info'];

const JUNK_TYPES = [
  { id: 'household', label: 'Household Items', sub: 'Furniture, appliances & everyday clutter' },
  { id: 'storage', label: 'Storage Unit', sub: 'Full or partial unit cleanouts' },
  { id: 'construction', label: 'Construction Debris', sub: 'Drywall, wood, tile & remodel waste' },
  { id: 'misc', label: 'Miscellaneous', sub: 'Yard waste, odd items & everything else' },
];

function formatPhone(digits) {
  const d = digits.slice(0, 10);
  if (d.length === 0) return '';
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function stripUsDigits(value) {
  let d = value.replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
  return d.slice(0, 10);
}

const ALLOWED_KEYS = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter'];

export default function EstimateWizard() {
  const [step, setStep] = useState(0);
  const [inArea, setInArea] = useState(null); // 'yes' | 'no'
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [touched, setTouched] = useState(false);

  const canNext = [inArea !== null, types.length > 0, name.trim().length > 1 && phoneDigits.length === 10][step];

  const toggleType = (id) =>
    setTypes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));

  const onPhoneKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey || ALLOWED_KEYS.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const onPhonePaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    setPhoneDigits(stripUsDigits(pasted));
  };

  const onPhoneChange = (e) => setPhoneDigits(stripUsDigits(e.target.value));

  const next = () => {
    if (!canNext) {
      setTouched(true);
      return;
    }
    setTouched(false);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setTouched(false);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!canNext) {
      setTouched(true);
      return;
    }
    setSubmitting(true);
    const payload = {
      business: business.name,
      inServiceArea: inArea === 'yes',
      junkTypes: types.map((id) => JUNK_TYPES.find((t) => t.id === id).label),
      name: name.trim(),
      phone: formatPhone(phoneDigits),
      details: details.trim(),
      submittedAt: new Date().toISOString(),
      source: typeof window !== 'undefined' ? window.location.href : '',
    };
    if (business.estimateWebhookUrl) {
      try {
        await fetch(business.estimateWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        /* still show confirmation; customer can call */
      }
    }
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className={styles.wrap}>
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <CheckIcon width={30} height={30} />
          </span>
          <h1 className={styles.successTitle}>Thanks, {name.trim().split(' ')[0]}!</h1>
          <p className={styles.successText}>
            Your request is in. We&rsquo;ll reach out at {formatPhone(phoneDigits)} shortly with your quote. Need us sooner? Give us a call.
          </p>
          <div className={styles.successBtns}>
            <a href={business.phone.href} className={styles.pill}>
              <PhoneIcon width={17} height={17} /> {business.phone.display}
            </a>
            <Link to="/" className={styles.backLink}>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.badge}>
        <span className={styles.badgeIcon}>
          <CheckIcon width={13} height={13} />
        </span>
        Free, No-Obligation Estimate
      </div>

      <ol className={styles.progress} aria-label="Estimate progress">
        {STEPS.map((label, i) => {
          const state = i < step ? 'complete' : i === step ? 'current' : 'upcoming';
          return (
            <li
              key={label}
              className={`${styles.progressItem} ${styles[state]}`}
              aria-current={state === 'current' ? 'step' : undefined}
            >
              <span className={styles.progressCircle}>
                {state === 'complete' ? <CheckIcon width={14} height={14} /> : i + 1}
              </span>
              <span className={styles.progressLabel}>{label}</span>
              <span className="srOnly">
                {state === 'complete' ? ' (completed)' : state === 'current' ? ' (current step)' : ' (upcoming)'}
              </span>
            </li>
          );
        })}
      </ol>

      <form className={styles.card} onSubmit={submit} noValidate>
        {step === 0 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.question}>Is your pickup in {business.serviceAreaLabel}?</legend>
            <div className={styles.optionRow}>
              {[
                { id: 'yes', label: 'Yes', sub: "I'm in or near Orange County, CA" },
                { id: 'no', label: 'No', sub: "I'm outside Orange County, CA" },
              ].map((opt) => (
                <label key={opt.id} className={`${styles.option} ${inArea === opt.id ? styles.optionActive : ''}`}>
                  <input
                    type="radio"
                    name="inArea"
                    value={opt.id}
                    checked={inArea === opt.id}
                    onChange={() => setInArea(opt.id)}
                    className="srOnly"
                  />
                  <span className={styles.wizardOptionTop}>
                    <span className={styles.checkbox} aria-hidden="true">
                      {inArea === opt.id && <CheckIcon width={12} height={12} />}
                    </span>
                    <span className={styles.optionLabel}>{opt.label}</span>
                  </span>
                  <span className={styles.optionSub}>{opt.sub}</span>
                </label>
              ))}
            </div>
            <div className={`${styles.notice} ${inArea === 'no' ? styles.noticeShow : ''}`} aria-live="polite">
              <p>
                No problem &mdash; we can often still help. Pickups outside our usual area may include a small trip fee, which we&rsquo;ll include in your quote.
              </p>
            </div>
            {touched && !canNext && <p className={styles.error}>Please choose Yes or No to continue.</p>}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.question}>What kind of junk are we hauling?</legend>
            <p className={styles.hint}>Select all that apply.</p>
            <div className={styles.typeGrid}>
              {JUNK_TYPES.map((t) => {
                const active = types.includes(t.id);
                return (
                  <label key={t.id} className={`${styles.option} ${active ? styles.optionActive : ''}`}>
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleType(t.id)}
                      className="srOnly"
                    />
                    <span className={styles.wizardOptionTop}>
                      <span className={styles.checkbox} aria-hidden="true">
                        {active && <CheckIcon width={12} height={12} />}
                      </span>
                      <span className={styles.optionLabel}>{t.label}</span>
                    </span>
                    <span className={styles.optionSub}>{t.sub}</span>
                  </label>
                );
              })}
            </div>
            {touched && !canNext && <p className={styles.error}>Pick at least one type to continue.</p>}
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.question}>Where should we send your quote?</legend>
            <div className={styles.fields}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Name</span>
                <input
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Phone</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={formatPhone(phoneDigits)}
                  onKeyDown={onPhoneKeyDown}
                  onPaste={onPhonePaste}
                  onChange={onPhoneChange}
                  placeholder="(949) 555-0123"
                  className={styles.input}
                  required
                />
              </label>
              <label className={`${styles.field} ${styles.fieldFull}`}>
                <span className={styles.fieldLabel}>Details</span>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="What needs to go, where it is (garage, backyard, upstairs) and your preferred day."
                  className={`${styles.input} ${styles.textarea}`}
                />
              </label>
            </div>
            {touched && !canNext && (
              <p className={styles.error}>Please add your name and a 10-digit US phone number.</p>
            )}
          </fieldset>
        )}

        <div className={styles.footer}>
          {step > 0 ? (
            <button type="button" className={styles.backBtn} onClick={back}>
              Back
            </button>
          ) : (
            <span />
          )}
          {step < STEPS.length - 1 ? (
            <button type="button" className={styles.pill} onClick={next}>
              Next
            </button>
          ) : (
            <button type="submit" className={styles.pill} disabled={submitting}>
              {submitting ? 'Sending…' : 'Get Your Quote'}
            </button>
          )}
        </div>
      </form>

      <p className={styles.callLine}>
        Prefer to talk? Call <a href={business.phone.href}>{business.phone.display}</a>
      </p>
    </div>
  );
}
