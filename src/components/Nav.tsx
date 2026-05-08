import Glass from './Glass';
import ThemeToggle from './ThemeToggle';

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
            <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="16" cy="16" r="3.2" fill="currentColor" />
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

        <div className="nav__actions">
          <ThemeToggle />
          <a href="#waitlist" className="nav__cta">
            Join waitlist
          </a>
        </div>
      </Glass>
    </header>
  );
}
