"use client";

import { motion, type MotionValue } from "motion/react";

type MacbookFrameProps = {
  src: string;
  alt: string;
  className?: string;
  /** Screens stacked inside the laptop; scroll moves through them */
  screens?: readonly string[];
  /** Scroll-driven Y translate for the stack (e.g. "0%" → "-300%") */
  screenY?: string | MotionValue<string>;
};

export default function MacbookFrame({
  src,
  alt,
  className = "",
  screens,
  screenY = "0%",
}: MacbookFrameProps) {
  const images = screens?.length ? screens : [src];

  return (
    <div
      className={`mx-auto max-w-[1000px] px-[6%] py-[4%] ${className}`.trim()}
      role="img"
      aria-label={alt}
    >
      {/* Screen bezel */}
      <div
        className="
          relative mx-auto w-4/5 bg-black
          rounded-[3%_3%_0.5%_0.5%/5%]
          before:block before:content-[''] before:pt-[67%]
          before:rounded-[3%_3%_0.5%_0.5%/5%]
          before:border-2 before:border-[#cacacc]
          before:shadow-[0_0_0_1px_rgba(0,0,0,0.8)_inset,0_0_1px_2px_rgba(255,255,255,0.3)_inset]
          after:absolute after:bottom-[0.75%] after:left-[0.5%] after:w-[99%]
          after:border-t-2 after:border-white/15 after:pt-[1%] after:content-['']
        "
      >
        {/* Screen content — stacked images, scroll moves the stack */}
        <div className="absolute inset-0 m-[4.3%_3.2%] overflow-hidden bg-[#333]">
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ y: screenY }}
          >
            {images.map((imageSrc, index) => (
              <div
                key={`${imageSrc}-${index}`}
                className="absolute inset-x-0 h-full w-full"
                style={{ top: `${index * 100}%` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt=""
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_right_bottom,transparent_75%,rgba(255,255,255,0.05)_75%,transparent)]
            "
            aria-hidden
          />
        </div>
      </div>

      {/* Laptop base / hinge */}
      <div
        className="
          relative w-full
          before:block before:content-[''] before:pt-[3.3%]
          before:rounded-[0_0_10%_10%/0_0_50%_50%]
          before:bg-[linear-gradient(#eaeced,#edeef0_55%,#fff_55%,#8a8b8f_56%,#999ba0_61%,#4b4b4f_84%,#262627_89%,rgba(0,0,0,0.01)_98%)]
          after:absolute after:top-0 after:h-[53%] after:w-full after:content-['']
          after:bg-[linear-gradient(90deg,rgba(0,0,0,0.5),rgba(255,255,255,0.8)_0.5%,rgba(0,0,0,0.4)_3.3%,transparent_15%,rgba(255,255,255,0.8)_50%,transparent_85%,rgba(0,0,0,0.4)_96.7%,rgba(255,255,255,0.8)_99.5%,rgba(0,0,0,0.5)_100%)]
        "
      />

      {/* Center notch */}
      <div
        className="
          relative z-[2] mx-auto -mt-[3.5%] w-[14%] bg-[#ddd]
          rounded-[0_0_7%_7%/0_0_95%_95%]
          shadow-[-5px_-1px_3px_rgba(0,0,0,0.2)_inset,5px_-1px_3px_rgba(0,0,0,0.2)_inset]
          before:block before:content-[''] before:pt-[10%]
        "
      />
    </div>
  );
}
