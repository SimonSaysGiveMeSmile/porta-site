import Glass from './Glass';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#flow' },
  { label: 'Waitlist', href: '#waitlist' },
];

export default function Nav() {
  return (
    <header className="nav-wrap">
      <Glass as="nav" variant="soft" className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top">
          <svg
            className="nav__mark"
            viewBox="0 0 32 32"
            aria-hidden
            focusable="false"
          >
            <defs>
              <linearGradient id="markFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#c8c8c8" />
              </linearGradient>
            </defs>
            <circle cx="16" cy="16" r="10" fill="none" stroke="url(#markFill)" strokeWidth="1.6" />
            <circle cx="16" cy="16" r="3.2" fill="url(#markFill)" />
          </svg>
          <span className="nav__wordmark">Porta</span>
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#waitlist" className="nav__cta">
          <span>Join waitlist</span>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <path
              d="M2 7h9M7.5 3.5 11 7l-3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </Glass>
    </header>
  );
}
