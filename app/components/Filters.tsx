export default function SVGFilters() {
    return <>
        <svg width="0" height="0" style={{ position: "absolute" }}>
            <filter id="roughen" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.35"
                    numOctaves="3"
                    seed="7"
                    result="noise"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="1"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </svg>
    </>
}