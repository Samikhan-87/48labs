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
            Science-driven peptides engineered to support performance, recovery,
            <br />
            longevity, and metabolic optimization.
          </p>
          <a className="outline-button" href="#products">
            <span>Shop Now</span>
            <span className="outline-button-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M15.1421 0.999541C15.1421 0.447257 14.6943 -0.000458561 14.1421 -0.000458814L5.14206 -0.000458013C4.58978 -0.00045835 4.14206 0.447257 4.14206 0.999542C4.14206 1.55183 4.58978 1.99954 5.14206 1.99954L13.1421 1.99954L13.1421 9.99954C13.1421 10.5518 13.5898 10.9995 14.1421 10.9995C14.6943 10.9995 15.1421 10.5518 15.1421 9.99954L15.1421 0.999541ZM0.707031 14.4346L1.41414 15.1417L14.8492 1.70665L14.1421 0.999542L13.435 0.292435L-7.55191e-05 13.7275L0.707031 14.4346Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
          <small>
            48x Labs Peptides are certified by the Emirates Drug Establishment, ensuring trusted
            quality and
            <br />
            compliance with UAE regulatory standards
          </small>
        </div>
      </section>
      <div className="ticker" aria-label="Service highlights">
        <div>
          <span>
            Next-day delivery <i>·</i> Locally tested <i>·</i> <b>Cold-chain shipped</b> <i>·</i>{" "}
            Every batch tested <i>·</i>
          </span>
          <span>
            Next-day delivery <i>·</i> Locally tested <i>·</i> <b>Cold-chain shipped</b> <i>·</i>{" "}
            Every batch tested <i>·</i>
          </span>
        </div>
      </div>
    </>
  );
}
