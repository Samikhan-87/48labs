import { useState } from "react";
import { products } from "../data/products";

const trust = [
  [
    "TRUSTED QUALITY",
    "Every product is sourced and handled with strict quality standards to ensure consistency, purity, and reliability.",
    "/assets/287a1.png",
  ],
  [
    "FAST UAE DELIVERY",
    "Secure next-day delivery across the UAE so your wellness routine never slows down.",
    "/assets/a3b49.png",
  ],
  [
    "SCIENTIFICALLY DRIVEN",
    "Built around advanced peptide research and modern biotechnology to support real performance outcomes.",
    "/assets/c5856.png",
  ],
  [
    "SECURE & RELIABLE",
    "Safe checkout, trusted service, and responsive customer support for a seamless shopping experience.",
    "/assets/6dd1b.png",
  ],
];

export function TrustStrip() {
  return (
    <section className="trust-section">
      <div className="trust-grid">
        {trust.map(([title, text, image]) => (
          <article key={title}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function NewArrivals() {
  return (
    <section className="section arrivals">
      <header className="left-heading">
        <p>NEW ARRIVAL</p>
        <h2>New Wellness Essentials</h2>
      </header>
      <div className="arrival-row">
        {products.slice(1, 5).map((product) => (
          <article key={product.name}>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
              <a href="#products">View Product</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const faqItems = [
  [
    "What is 48x Labs?",
    "48x Labs is a UAE biotechnology and wellness company focused on premium, research-led peptide solutions.",
  ],
  [
    "What type of products does 48x Labs offer?",
    "The collection includes peptide formulations for metabolic support, recovery, cognitive wellness, performance and longevity.",
  ],
  [
    "Who are 48x Labs products intended for?",
    "Products are intended for informed adults and professional or laboratory research contexts, as specified on each product.",
  ],
];

export function AboutAndFaq() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <section className="about" id="about">
        <img src="/assets/86467.png" alt="" />
        <div>
          <p className="eyebrow">ABOUT 48x LABS</p>
          <h2>Biotechnology Solutions in UAE</h2>
          <p>
            We combine advanced biotechnology with modern wellness innovation to create premium
            peptide solutions designed for performance, recovery, and longevity. Our mission is to
            deliver scientifically inspired products that empower individuals to optimize their
            health with confidence.
          </p>
          <a className="text-link light" href="#about">
            Read More About Us <span>↗</span>
          </a>
        </div>
      </section>
      <section className="section faq" id="faqs">
        <header className="section-heading">
          <p>FAQS</p>
          <h2>Find Answers to Common Questions</h2>
        </header>
        <div className="faq-list">
          {faqItems.map(([question, answer], index) => (
            <article className={active === index ? "active" : ""} key={question}>
              <button
                onClick={() => setActive(active === index ? null : index)}
                aria-expanded={active === index}
              >
                {question}
                <span>{active === index ? "−" : "+"}</span>
              </button>
              <p>{answer}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href="#faqs">
          Check All FAQs <span>↗</span>
        </a>
      </section>
    </>
  );
}

export function Instagram() {
  const posts = [
    ["/assets/22315.png", "PERFORMANCE IS BIOLOGY"],
    ["/assets/fefa2.png", "WHY ALL THE INTEREST IN PEPTIDES?"],
    ["/assets/ea86b.png", "Small molecules, big messages."],
    ["/assets/6605c.png", "Peptides are already part of you"],
  ];
  return (
    <section className="section instagram">
      <header className="section-heading">
        <p>FOLLOW OUR INSTAGRAM</p>
        <h2>Join the 48x Labs Journey</h2>
        <span>
          Explore wellness insights, product highlights, recovery tips, and behind-the-scenes
          content.
        </span>
      </header>
      <div className="instagram-grid">
        {posts.map(([image, title]) => (
          <a href="#top" key={title}>
            <img src={image} alt={title} />
          </a>
        ))}
      </div>
    </section>
  );
}
