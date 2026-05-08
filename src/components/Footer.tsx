export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
            <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="16" cy="16" r="3.2" fill="currentColor" />
          </svg>
          <span>Porta</span>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#features">Features</a>
          <a href="#flow">How it works</a>
          <a href="#waitlist">Waitlist</a>
          <a href="mailto:hello@porta.app">Contact</a>
        </nav>

        <div className="footer__legal">
          <span>&copy; {year} Porta. All rights reserved.</span>
          <span className="footer__tagline">AirDrop with links.</span>
        </div>
      </div>
    </footer>
  );
}
