export default function SVGFilters() {
    return <>
        <svg width="0" height="0" style={{ position: "absolute" }}>
            <filter id="roughen"
                x="-5%"
                y="-5%"
                width="110%"
                height="110%"
                colorInterpolationFilters="sRGB"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.28 0.45"
                    numOctaves="2"
                    seed="17"
                    result="fiberNoise"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="fiberNoise"
                    scale="1.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="rough"
                />
                <feComposite
                    in="rough"
                    in2="SourceGraphic"
                    operator="over"
                />
            </filter>
            {(Array.from({ length: 10 })).map((_, i) => (
                <filter key={i} id={"gaussian-blur-"+(i+1)*10}>
                    <feGaussianBlur stdDeviation={(i+1)*10} />
                </filter>
            ))}
        </svg>
    </>
}