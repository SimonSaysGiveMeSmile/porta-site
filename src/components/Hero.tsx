import Glass from './Glass';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__copy">
          <Glass variant="pill" className="hero__eyebrow">
            <span className="hero__dot" aria-hidden />
            <span>Now in private beta</span>
          </Glass>

          <h1 className="hero__title">
            AirDrop.
            <br />
            <span className="hero__title-accent">With links.</span>
          </h1>

          <p className="hero__sub">
            Porta turns your phone into a temporary personal sharing node.
            Pick a file, generate a live link, and stream it to anyone on any
            device. No uploads, no accounts, no waiting.
          </p>

          <div className="hero__ctas">
            <a href="#waitlist" className="btn btn--primary">
              Join the waitlist
            </a>
            <a href="#flow" className="btn btn--ghost">
              See how it works
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <strong>End&#8209;to&#8209;end encrypted</strong>
              <span>DTLS over WebRTC</span>
            </li>
            <li>
              <strong>No cloud uploads</strong>
              <span>Files stay on your phone</span>
            </li>
            <li>
              <strong>Works in any browser</strong>
              <span>Receiver needs no app</span>
            </li>
          </ul>
        </div>

        <div className="hero__stage" aria-hidden>
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="phone">
      <div className="phone__frame">
        <div className="phone__screen">
          <div className="phone__statusbar">
            <span>9:41</span>
            <span className="phone__dots">
              <span /><span /><span />
            </span>
          </div>

          <div className="phone__stack">
            <Glass variant="soft" className="phone__card phone__card--hero">
              <div className="phone__row">
                <div className="phone__thumb" aria-hidden>
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M5 4h10l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path d="M15 4v4h4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="phone__meta">
                  <div className="phone__title">Project&nbsp;Portal.key</div>
                  <div className="phone__sub">248&nbsp;MB · live link</div>
                </div>
                <div className="phone__pulse" aria-hidden>
                  <span /><span /><span />
                </div>
              </div>
              <div className="phone__url">porta.app/s/4f9a2x</div>
            </Glass>

            <Glass variant="soft" className="phone__card">
              <div className="phone__row">
                <div className="phone__avatar" aria-hidden>M</div>
                <div className="phone__meta">
                  <div className="phone__title">Maya wants to download</div>
                  <div className="phone__sub">Safari · Berlin</div>
                </div>
                <button className="phone__approve">Approve</button>
              </div>
            </Glass>

            <Glass variant="soft" className="phone__card phone__card--progress">
              <div className="phone__row">
                <div className="phone__meta">
                  <div className="phone__title">Streaming</div>
                  <div className="phone__sub">Direct · 62 MB/s</div>
                </div>
                <div className="phone__percent">74%</div>
              </div>
              <div className="phone__bar" aria-hidden>
                <span style={{ width: '74%' }} />
              </div>
            </Glass>
          </div>
        </div>
      </div>
      <div className="phone__glow" aria-hidden />
    </div>
  );
}
