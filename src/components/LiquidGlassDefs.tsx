export default function LiquidGlassDefs() {
  return (
    <svg
      className="lg-defs"
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        {/* Core liquid glass: low-frequency turbulent noise drives a gentle
            displacement map so whatever sits behind the element is bent as
            if passing through a thick pane, then lightly frosted. No
            specular pass — in a pure B&W palette the specular rig bloomed
            bright white spots that fought the type. The rim highlight is
            handled by inset box-shadow in CSS. */}
        <filter
          id="liquid-glass"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.014"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.6" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          <feGaussianBlur in="refracted" stdDeviation="0.4" result="out" />
          <feMerge>
            <feMergeNode in="out" />
          </feMerge>
        </filter>

        {/* Softer variant used by the nav bar — minimal displacement, more
            frost, so text behind it stays readable while it still bends
            the aurora. */}
        <filter
          id="liquid-glass-soft"
          x="-5%"
          y="-15%"
          width="110%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.016"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          <feGaussianBlur in="refracted" stdDeviation="0.6" result="out" />
          <feMerge>
            <feMergeNode in="out" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
