import { useRef, useState } from "react";
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

const ARRIVAL_CIRCUMFERENCE = 2 * Math.PI * 32;

export function NewArrivals() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(18);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

  const updateProgress = () => {
    const el = sliderRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setProgress(100);
      return;
    }
    const ratio = Math.min(1, Math.max(0, el.scrollLeft / maxScroll));
    setProgress(18 + ratio * 82);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sliderRef.current;
    if (!el) return;
    dragState.current = {
      active: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sliderRef.current;
    if (!el || !dragState.current.active) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.25;
    if (Math.abs(walk) > 5) {
      dragState.current.moved = true;
    }
    el.scrollLeft = dragState.current.scrollLeft - walk;
    updateProgress();
  };

  const stopDragging = () => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    setIsDragging(false);
  };

  return (
    <section className="section arrivals">
      <header className="left-heading">
        <p>NEW ARRIVAL</p>
        <h2>New Wellness Essentials</h2>
      </header>
      <div className="arrival-slider-wrap">
        <div
          ref={sliderRef}
          className={isDragging ? "arrival-row is-dragging" : "arrival-row"}
          onScroll={updateProgress}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {products.slice(1, 5).map((product) => {
            const stats = product.stats ?? [];
            return (
              <article className="arrival-card" key={product.name}>
                <a
                  href="#products"
                  className="arrival-image"
                  onClick={(e) => {
                    if (dragState.current.moved) e.preventDefault();
                  }}
                >
                  <img src={product.image} alt={product.name} draggable={false} />
                  {stats.length > 0 && (
                    <div className="arrival-hover-stats" aria-hidden="true">
                      <div
                        className={`arrival-stats-row arrival-stats-count-${stats.length}`}
                      >
                        {stats.map((stat) => {
                          const offset =
                            ARRIVAL_CIRCUMFERENCE * (1 - stat.percent / 100);
                          return (
                            <div className="arrival-stat-item" key={stat.label}>
                              <div className="arrival-stat-circle">
                                <svg
                                  viewBox="0 0 76 76"
                                  className="arrival-progress-svg"
                                >
                                  <circle
                                    className="arrival-progress-bg"
                                    cx="38"
                                    cy="38"
                                    r="32"
                                  />
                                  <circle
                                    className="arrival-progress-bar"
                                    cx="38"
                                    cy="38"
                                    r="32"
                                    style={{
                                      strokeDasharray: ARRIVAL_CIRCUMFERENCE,
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
                <div className="arrival-content">
                  <a
                    href="#products"
                    className="arrival-title"
                    onClick={(e) => {
                      if (dragState.current.moved) e.preventDefault();
                    }}
                  >
                    <h3>{product.name}</h3>
                  </a>
                  <p className="arrival-desc">{product.description}</p>
                  <strong className="arrival-price">{product.price}</strong>
                  <div className="arrival-action">
                    <a
                      href="#products"
                      className="arrival-btn"
                      onClick={(e) => {
                        if (dragState.current.moved) e.preventDefault();
                      }}
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="arrival-slider-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  [
    "What is 48x Labs?",
    "48x Labs is a premium peptide and lab-focused wellness ecommerce brand offering advanced formulations, peptide products, and preparation support items for clinics, wellness professionals, and informed buyers. Our platform is designed to make product discovery clear, structured, and responsible.",
  ],
  [
    "What type of products does 48x Labs offer?",
    "Our catalog includes peptide formulations across categories such as weight management, muscle support, recovery, cognitive support, and healthy aging, along with essential preparation accessories like bacteriostatic water and sterile syringes.",
  ],
  [
    "Who are 48x Labs products intended for?",
    "Our products are intended for professional, clinic, and informed wellness buyers who understand the importance of responsible product selection, proper handling, and compliance with applicable regulations. Product suitability may vary depending on the item, location, and intended use.",
  ],
];

export function AboutAndFaq() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <section className="about" id="about">
        <div className="about-bg" aria-hidden="true">
          <video
            className="about-video"
            src="https://48xlabs.com/wp-content/uploads/2026/06/0-Bubbles-Condensation-3840X2160.mp4"
            poster="/assets/86467.png"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="about-card">
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
          {faqItems.map(([question, answer], index) => {
            const isOpen = active === index;
            return (
              <article className={isOpen ? "active" : ""} key={question}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="15" fill="#05D2FE" />
                      <path
                        d="M25.3646 22.6351H30.5514C30.9134 22.6351 31.2606 22.7789 31.5166 23.0349C31.7725 23.2909 31.9163 23.6381 31.9163 24.0001C31.9163 24.3621 31.7725 24.7093 31.5166 24.9652C31.2606 25.2212 30.9134 25.365 30.5514 25.365H25.3646C21.4997 25.365 27.958 25.365 22.6347 25.365H17.448C17.0859 25.365 16.7388 25.2212 16.4828 24.9652C16.2268 24.7093 16.083 24.3621 16.083 24.0001C16.083 23.6381 16.2268 23.2909 16.4828 23.0349C16.7388 22.7789 17.0859 22.6351 17.448 22.6351H22.6347C26.4997 22.6348 21.4997 22.6352 25.3646 22.6351Z"
                        fill="white"
                      />
                      {!isOpen && (
                        <path
                          d="M25.3641 25.3651L25.3641 30.5519C25.3641 30.9139 25.2203 31.2611 24.9644 31.517C24.7084 31.773 24.3612 31.9168 23.9992 31.9168C23.6372 31.9168 23.29 31.773 23.034 31.517C22.7781 31.2611 22.6342 30.9139 22.6342 30.5519L22.6342 25.3651C22.6342 21.5002 22.6342 27.9585 22.6342 22.6352L22.6342 17.4484C22.6342 17.0864 22.7781 16.7393 23.034 16.4833C23.29 16.2273 23.6372 16.0835 23.9992 16.0835C24.3612 16.0835 24.7084 16.2273 24.9644 16.4833C25.2203 16.7393 25.3641 17.0864 25.3641 17.4484L25.3641 22.6352C25.3645 26.5002 25.364 21.5002 25.3641 25.3651Z"
                          fill="white"
                        />
                      )}
                    </svg>
                  </span>
                </button>
                <p>{answer}</p>
              </article>
            );
          })}
        </div>
        <a className="text-link" href="#faqs">
          Check All FAQs <span>↗</span>
        </a>
      </section>
    </>
  );
}

export function Instagram() {
  const posts: Array<{ image: string; title: string; isCarousel?: boolean }> = [
    { image: "/assets/22315.png", title: "PERFORMANCE IS BIOLOGY" },
    { image: "/assets/fefa2.png", title: "WHY ALL THE INTEREST IN PEPTIDES?" },
    {
      image: "/assets/ea86b.png",
      title: "Small molecules, big messages.",
      isCarousel: true,
    },
    { image: "/assets/6605c.png", title: "Peptides are already part of you" },
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
        {posts.map((post) => (
          <a href="#top" key={post.title} className="instagram-item">
            <img src={post.image} alt={post.title} />
            {post.isCarousel && (
              <svg
                className="instagram-carousel-icon"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
                />
              </svg>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
