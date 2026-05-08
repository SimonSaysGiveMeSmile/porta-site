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
 * Liquid glass primitive. Three layers, bottom to top:
 *   1. a backdrop layer with our SVG refraction filter
 *   2. a translucent white tint
 *   3. the real content
 *
 * The rim highlight is intentionally a CSS inset shadow on the host,
 * not an SVG stroke — SVG rect can't inherit the host's border-radius,
 * so a stroked rect reads as a hard box on pills and rounded cards.
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
        style={{ backdropFilter: `url(#${filterId}) blur(14px) saturate(1.3)` }}
      />
      <span className="glass__tint" aria-hidden />
      <span className="glass__content">{children}</span>
    </Tag>
  );
}
