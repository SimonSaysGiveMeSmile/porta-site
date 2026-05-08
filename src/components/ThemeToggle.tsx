import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return (document.documentElement.dataset.theme as Theme) || 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('porta.theme', theme);
    } catch {
      /* storage blocked */
    }
  }, [theme]);

  const next: Theme = theme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${next} mode`;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__track" aria-hidden>
        <span
          className="theme-toggle__thumb"
          data-side={theme === 'dark' ? 'left' : 'right'}
        />
        <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 20 20" aria-hidden>
          <path
            d="M14.5 12.2a6 6 0 0 1-6.7-6.7 6 6 0 1 0 6.7 6.7Z"
            fill="currentColor"
          />
        </svg>
        <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 20 20" aria-hidden>
          <circle cx="10" cy="10" r="3.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.1 5.1l1.4 1.4M13.5 13.5l1.4 1.4M5.1 14.9l1.4-1.4M13.5 6.5l1.4-1.4" />
          </g>
        </svg>
      </span>
    </button>
  );
}
