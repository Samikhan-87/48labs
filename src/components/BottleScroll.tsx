import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

export function BottleScroll() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const bottleWrap = section.querySelector<HTMLElement>(".bottle-wrap")!;
    const bottleOne = section.querySelector<HTMLElement>(".bottle-one")!;
    const bottleTwo = section.querySelector<HTMLElement>(".bottle-two")!;
    const textOne = section.querySelector<HTMLElement>(".stat-first")!;
    const uvText = section.querySelector<HTMLElement>(".stat-uv")!;
    const textTwo = section.querySelector<HTMLElement>(".stat-second")!;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const range = section.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const progress = clamp(-rect.top / range);

      if (window.innerWidth <= 767) {
        const firstOut = clamp((progress - 0.08) / 0.22);
        const bottleIn = clamp((progress - 0.18) / 0.16);
        const bottleOut = clamp((progress - 0.62) / 0.2);
        const textIn = clamp((progress - 0.78) / 0.18);
        const bottleX = (1 - bottleIn) * 35 + bottleOut * -120;
        textOne.style.transform = `translate(${firstOut * -120}vw, -50%)`;
        uvText.style.transform = `translate(${firstOut * -120}vw, -50%)`;
        bottleWrap.style.left = "50%";
        bottleWrap.style.transform = `translate(calc(-50% + ${bottleX}vw), -50%)`;
        bottleWrap.style.opacity = bottleIn <= 0 || bottleOut >= 1 ? "0" : "1";
        const reveal = clamp((progress - 0.24) / 0.34);
        bottleOne.style.clipPath = `inset(0 0 ${reveal * 100}% 0)`;
        bottleTwo.style.clipPath = `inset(${100 - reveal * 100}% 0 0 0)`;
        textTwo.style.transform = `translate(calc(-50% + ${(1 - textIn) * 120}vw), -50%)`;
        textTwo.style.opacity = textIn <= 0 ? "0" : "1";
        return;
      }

      const firstOut = clamp((progress - 0.05) / 0.2);
      const bottleIn = clamp((progress - 0.14) / 0.14);
      const bottleMove = clamp((progress - 0.14) / 0.42);
      const textIn = clamp((progress - 0.7) / 0.2);
      textOne.style.transform = `translate(${firstOut * -120}vw, -50%)`;
      uvText.style.transform = `translate(${firstOut * -120}vw, -50%)`;
      const start = window.innerWidth <= 1024 ? 86 : 88;
      bottleWrap.style.left = `${start - bottleMove * (start - (window.innerWidth <= 1024 ? 20 : 12))}%`;
      bottleWrap.style.transform = "translate(-50%, -50%)";
      bottleWrap.style.opacity = bottleIn <= 0 ? "0" : "1";
      bottleOne.style.clipPath = `inset(0 0 ${bottleMove * 100}% 0)`;
      bottleTwo.style.clipPath = `inset(${100 - bottleMove * 100}% 0 0 0)`;
      textTwo.style.transform = `translate(calc(-50% + ${(1 - textIn) * 120}vw), -50%)`;
      textTwo.style.opacity = textIn <= 0 ? "0" : "1";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="statistics">
      <header className="section-heading">
        <p>STATISTICS</p>
        <h2>Trusted Peptides, Verified Results</h2>
      </header>
      <section className="bottle-scroll" ref={sectionRef}>
        <div className="bottle-sticky">
          <div className="stat-first">
            <h2>99%</h2>
            <h3>PURITY</h3>
          </div>
          <div className="stat-uv">
            <h3>
              Brown outer casing for
              <br />
              UV protection
            </h3>
          </div>
          <div className="stat-second">
            <h4>Premium Peptide Solution</h4>
            <p>
              High-quality peptide formula with 99% purity, manufactured under strict quality
              standards for consistency and reliability. Designed for laboratory and research
              applications, this peptide solution offers exceptional stability, precision, and
              performance. Carefully processed and purity-tested to ensure maximum quality with
              minimal impurities. Stored in a secure sterile bottle to maintain freshness and
              integrity.
            </p>
          </div>
          <div className="bottle-wrap">
            <img
              className="bottle bottle-one"
              src="/assets/bottle-white.webp"
              alt="48x Labs white peptide bottle"
            />
            <img
              className="bottle bottle-two"
              src="/assets/bottle-brown.webp"
              alt="48x Labs brown peptide bottle"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
