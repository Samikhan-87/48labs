import { Header } from "./Header";

export function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <Header />
        <div className="hero-content">
          <p className="eyebrow">ADVANCED BIOTECHNOLOGY</p>
          <h1>
            Restore. <em>Rebalance.</em> Reignite.
          </h1>
          <p>
            Science-driven peptides engineered to support performance, recovery, longevity, and
            metabolic optimization.
          </p>
          <a className="outline-button" href="#products">
            Shop Now <span>↗</span>
          </a>
          <small>
            48x Labs Peptides are certified by the Emirates Drug Establishment, ensuring trusted
            quality and compliance with UAE regulatory standards
          </small>
        </div>
      </section>
      <div className="ticker" aria-label="Service highlights">
        <div>
          Next-day delivery <i>·</i> Locally tested <i>·</i> <b>Cold-chain shipped</b> <i>·</i>{" "}
          Every batch tested <i>·</i> Next-day delivery <i>·</i> Locally tested
        </div>
      </div>
    </>
  );
}
