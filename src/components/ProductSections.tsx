import { products } from "../data/products";

const categories = [
  [
    "WEIGHT LOSS",
    "Targeted solutions designed to support body composition and metabolic wellness.",
    "/assets/a0b01.png",
  ],
  [
    "MUSCLE BUILDING",
    "Advanced performance support for strength, growth, and physical optimisation.",
    "/assets/cf412.png",
  ],
  [
    "ANTI AGING",
    "Science-backed solutions focused on longevity, vitality, and cellular wellness.",
    "/assets/fbcdd.png",
  ],
  [
    "RECOVERY",
    "Support your body’s repair process, resilience, and post-performance recovery.",
    "/assets/5410a.png",
  ],
];

const CIRCUMFERENCE = 2 * Math.PI * 32;

export function Categories() {
  return (
    <section className="category-grid" aria-label="Product categories">
      {categories.map(([title, text, image]) => (
        <a className="category-card" href="#products" key={title}>
          <img className="category-card-bg" src={image} alt="" />
          <span className="category-card-overlay" aria-hidden="true" />
          <div className="category-card-content">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

export function FeaturedProducts() {
  return (
    <section className="section products-section" id="products">
      <header className="section-heading">
        <p>FEATURED PRODUCTS</p>
        <h2>FEATURED PEPTIDE FORMULATIONS</h2>
        <span>
          Explore selected products across metabolic support, recovery, cognitive wellness, and
          longevity-focused protocols.
        </span>
      </header>
      <div className="product-grid">
        {products.map((product) => {
          const stats = product.stats ?? [];
          return (
            <article className="product-card" key={product.name}>
              <a href="#products" className="product-image">
                <img src={product.image} alt={product.name} />
                {stats.length > 0 && (
                  <div className="product-hover-stats" aria-hidden="true">
                    <div
                      className={`product-stats-row product-stats-count-${stats.length}`}
                    >
                      {stats.map((stat) => {
                        const offset = CIRCUMFERENCE * (1 - stat.percent / 100);
                        return (
                          <div className="product-stat-item" key={stat.label}>
                            <div className="product-stat-circle">
                              <svg
                                viewBox="0 0 76 76"
                                className="product-progress-svg"
                              >
                                <circle
                                  className="product-progress-bg"
                                  cx="38"
                                  cy="38"
                                  r="32"
                                />
                                <circle
                                  className="product-progress-bar"
                                  cx="38"
                                  cy="38"
                                  r="32"
                                  style={{
                                    strokeDasharray: CIRCUMFERENCE,
                                    strokeDashoffset: offset,
                                  }}
                                />
                              </svg>
                              <span>{stat.percent}%</span>
                            </div>
                            <p>{stat.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </a>
              <div className="product-content">
                <a href="#products" className="product-title">
                  <h3>{product.name}</h3>
                </a>
                <p className="product-desc">{product.description}</p>
                <strong className="product-price">{product.price}</strong>
                <div className="product-action">
                  <a href="#products" className="product-view-btn">
                    View Product
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <a className="text-link" href="#products">
        See All Products <span>↗</span>
      </a>
    </section>
  );
}
