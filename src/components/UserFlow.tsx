import Glass from './Glass';

const steps = [
  {
    n: '01',
    title: 'Pick your file',
    body: 'Open the iOS share sheet from Photos, Files, or any app. Porta lights up alongside AirDrop.',
  },
  {
    n: '02',
    title: 'Create a live link',
    body: 'Porta spins up a temporary, signed URL. Copy it, text it, drop it in Slack — wherever.',
  },
  {
    n: '03',
    title: 'They request, you approve',
    body: 'The receiver opens the link in any browser and asks to download. You get one push notification.',
  },
  {
    n: '04',
    title: 'Encrypted stream, zero cloud',
    body: 'An ephemeral P2P session opens. Bytes flow phone-to-browser, then the link vanishes.',
  },
];

export default function UserFlow() {
  return (
    <section className="section" id="flow">
      <header className="section__head">
        <p className="eyebrow">User flow</p>
        <h2 className="section__title">
          Four steps. Under thirty seconds.
        </h2>
        <p className="section__lede">
          No queues, no sync, no “upload complete” screens. Porta holds the
          link open just long enough for the hand-off.
        </p>
      </header>

      <ol className="flow">
        {steps.map((s) => (
          <li key={s.n} className="flow__item">
            <Glass className="flow__card">
              <span className="flow__num">{s.n}</span>
              <h3 className="flow__title">{s.title}</h3>
              <p className="flow__body">{s.body}</p>
            </Glass>
          </li>
        ))}
      </ol>
    </section>
  );
}
