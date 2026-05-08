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
        {/* Core liquid glass: turbulent noise drives a displacement map so
            whatever sits behind the element is bent as if passing through a
            thick pane. A soft gaussian blur frosts it, a specular light rig
            adds the curved-glass glint, and the whole thing is composited
            back against the source so edges stay sharp. */}
        <filter
          id="liquid-glass"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.4" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          <feGaussianBlur in="refracted" stdDeviation="0.6" result="frosted" />

          {/* Specular highlight: a virtual light ramp curves across the surface */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="bumpBase" />
          <feSpecularLighting
            in="bumpBase"
            surfaceScale="5"
            specularConstant="0.9"
            specularExponent="60"
            lightingColor="#ffffff"
            result="specular"
          >
            <fePointLight x="120" y="-40" z="260" />
          </feSpecularLighting>
          <feComposite
            in="specular"
            in2="SourceAlpha"
            operator="in"
            result="specClipped"
          />
          <feComposite
            in="frosted"
            in2="specClipped"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="0.7"
            k4="0"
            result="lit"
          />
          <feMerge>
            <feMergeNode in="lit" />
          </feMerge>
        </filter>

        {/* Softer variant used by the nav bar — less displacement, more frost,
            so text behind it stays readable while it still bends the aurora. */}
        <filter
          id="liquid-glass-soft"
          x="-10%"
          y="-30%"
          width="120%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.02"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.8" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          <feGaussianBlur in="refracted" stdDeviation="0.9" result="frosted" />
          <feMerge>
            <feMergeNode in="frosted" />
          </feMerge>
        </filter>

        {/* Edge light: the bright rim you see on iOS 26 glass pills */}
        <filter
          id="liquid-glass-rim"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
        >
          <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="out" />
          <feMorphology in="SourceAlpha" operator="erode" radius="1.2" result="inn" />
          <feComposite in="out" in2="inn" operator="out" result="ring" />
          <feGaussianBlur in="ring" stdDeviation="0.8" result="ringSoft" />
          <feMerge>
            <feMergeNode in="ringSoft" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
