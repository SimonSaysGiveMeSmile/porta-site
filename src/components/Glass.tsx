import type { CSSProperties, ReactNode } from 'react';

type Variant = 'default' | 'soft' | 'pill';

type Props = {
  variant?: Variant;
  as?: 'div' | 'nav' | 'header' | 'section' | 'a' | 'button';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  'aria-label'?: string;
};

/**
 * Wraps children in a layered div that looks like iOS 26 Liquid Glass:
 *   1. a backdrop layer with our SVG refraction filter applied to whatever
 *      is behind the card
 *   2. a translucent white tint layer
 *   3. a rim highlight drawn as an SVG stroke so it is a true vector edge
 *   4. the actual content on top
 */
export default function Glass({
  variant = 'default',
  as = 'div',
  className = '',
  style,
  children,
  href,
  onClick,
  'aria-label': ariaLabel,
}: Props) {
  const Tag = as as 'div';
  const filterId =
    variant === 'soft' ? 'liquid-glass-soft' : 'liquid-glass';

  const extraProps: Record<string, unknown> = {};
  if (href) extraProps.href = href;
  if (onClick) extraProps.onClick = onClick;
  if (ariaLabel) extraProps['aria-label'] = ariaLabel;

  return (
    <Tag
      className={`glass glass--${variant} ${className}`.trim()}
      style={style}
      {...extraProps}
    >
      <span
        className="glass__refraction"
        aria-hidden
        style={{ backdropFilter: `url(#${filterId}) blur(14px) saturate(1.4)` }}
      />
      <span className="glass__tint" aria-hidden />
      <svg className="glass__rim" aria-hidden preserveAspectRatio="none">
        <rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="inherit"
          fill="none"
          stroke="url(#glassRim)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="glassRim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="glass__content">{children}</span>
    </Tag>
  );
}
