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

export function Categories() {
  return (
    <section className="category-grid" aria-label="Product categories">
      {categories.map(([title, text, image]) => (
        <a className="category-card" href="#products" key={title}>
          <img src={image} alt="" />
          <div>
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
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <a href="#products" className="product-image">
              <img src={product.image} alt={product.name} />
            </a>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </article>
        ))}
      </div>
      <a className="text-link" href="#products">
        See All Products <span>↗</span>
      </a>
    </section>
  );
}
