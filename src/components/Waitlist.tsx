import { useState, type FormEvent } from 'react';
import Glass from './Glass';

type Status = 'idle' | 'submitting' | 'done' | 'error';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // No backend yet — we stash the interest locally so the form does
    // something real while the waitlist API is wired up.
    try {
      const existing = JSON.parse(
        localStorage.getItem('porta.waitlist') ?? '[]',
      ) as string[];
      if (!existing.includes(email)) existing.push(email);
      localStorage.setItem('porta.waitlist', JSON.stringify(existing));
      await new Promise((r) => setTimeout(r, 450));
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section section--waitlist" id="waitlist">
      <Glass className="waitlist">
        <div className="waitlist__inner">
          <p className="eyebrow eyebrow--center">Be the first to send</p>
          <h2 className="waitlist__title">
            Get early access to Porta.
          </h2>
          <p className="waitlist__lede">
            We are rolling out the private beta to small batches of senders.
            Drop your email and we will hand you a TestFlight invite plus the
            first download link the moment your slot is up.
          </p>

          <form className="waitlist__form" onSubmit={onSubmit} noValidate>
            <label className="waitlist__field">
              <span className="sr-only">Email address</span>
              <input
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                autoComplete="email"
                required
              />
            </label>
            <button
              type="submit"
              className="btn btn--primary waitlist__submit"
              disabled={status === 'submitting' || status === 'done'}
            >
              {status === 'done'
                ? 'You are on the list'
                : status === 'submitting'
                ? 'Adding…'
                : 'Request invite'}
            </button>
          </form>

          {status === 'error' && (
            <p className="waitlist__msg waitlist__msg--err">
              That email does not look right. Try again?
            </p>
          )}
          {status === 'done' && (
            <p className="waitlist__msg">
              Nice. Keep an eye on your inbox — TestFlight drops weekly.
            </p>
          )}

          <div className="waitlist__download">
            <span className="waitlist__download-label">Already invited?</span>
            <a className="btn btn--pill" href="#" aria-label="Download on the App Store">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path
                  fill="currentColor"
                  d="M17.05 12.54c-.02-2.13 1.74-3.15 1.82-3.2-.99-1.45-2.54-1.65-3.09-1.67-1.31-.13-2.56.77-3.23.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.03 1.57 2.19 2.68 2.15 1.08-.05 1.48-.7 2.78-.7s1.67.7 2.8.67c1.16-.02 1.9-1.05 2.6-2.09.83-1.2 1.16-2.37 1.18-2.43-.03-.01-2.27-.87-2.31-3.46ZM14.8 5.57c.59-.72 1-1.72.88-2.72-.85.04-1.89.57-2.5 1.28-.55.63-1.03 1.65-.9 2.63.95.07 1.92-.48 2.52-1.19Z"
                />
              </svg>
              <span>Download on App Store</span>
            </a>
          </div>
        </div>
      </Glass>
    </section>
  );
}
