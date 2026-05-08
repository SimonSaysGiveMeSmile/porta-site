import Glass from './Glass';
import type { ReactNode } from 'react';

type Feature = {
  title: string;
  body: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: 'Live links, not uploads',
    body: 'Generate a universal URL in under two seconds. The file never leaves your device until someone actually asks for it.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden>
        <path
          d="M12 20a4 4 0 0 1 0-5.6l3-3a4 4 0 0 1 5.6 5.6l-1.4 1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 12a4 4 0 0 1 0 5.6l-3 3a4 4 0 0 1-5.6-5.6l1.4-1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Approve in one tap',
    body: 'Receivers request access, you tap approve. A temporary encrypted session opens and closes with the transfer.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden>
        <path
          d="M7 17l5 5 13-13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Direct device to device',
    body: 'WebRTC attempts a direct peer connection first. Relay fallback is automatic, so you never babysit the network.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden>
        <circle cx="8" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 16h10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M8 13v-4M24 13v-4M8 23v-4M24 23v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Opens in any browser',
    body: 'Receivers get a clean page on Safari, Chrome, Edge, or Firefox. No signup, no install, no friction.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden>
        <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 16h20M16 6c3 3 4.5 6.3 4.5 10s-1.5 7-4.5 10c-3-3-4.5-6.3-4.5-10s1.5-7 4.5-10Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'End-to-end encrypted',
    body: 'Every transfer runs over DTLS with a signed, expiring token. Porta never sees your file — only the handshake.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden>
        <rect x="8" y="14" width="16" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14v-3a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="19.5" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Ephemeral by design',
    body: 'Sessions expire the moment the transfer ends. No sync folders, no permanent hosting, no leftover copies.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden>
        <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <header className="section__head">
        <p className="eyebrow">Why Porta</p>
        <h2 className="section__title">
          Sharing that feels like FaceTime, <br />
          not server software.
        </h2>
        <p className="section__lede">
          Porta is built on one idea: every phone can be a temporary sharing
          node. Tap, approve, stream, done.
        </p>
      </header>

      <div className="features">
        {features.map((f) => (
          <Glass key={f.title} className="feature">
            <div className="feature__icon">{f.icon}</div>
            <h3 className="feature__title">{f.title}</h3>
            <p className="feature__body">{f.body}</p>
          </Glass>
        ))}
      </div>
    </section>
  );
}
