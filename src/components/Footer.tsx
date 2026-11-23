export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/assets/logo-white.svg" alt="48x Labs" />
          <p>
            Science-driven peptides engineered to support performance, recovery, longevity, and
            metabolic optimization.
          </p>
        </div>
        <address>
          <a href="tel:+971562114848">+971562114848</a>
          <a href="mailto:support@48xlabs.com">support@48xlabs.com</a>
          <span>Nation Towers, Corniche, Abu Dhabi, United Arab Emirates</span>
        </address>
        <nav>
          <a href="#top">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Shop</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <form onSubmit={(event) => event.preventDefault()}>
          <h3>Join Our Email List</h3>
          <p>Get exclusive deals and early access to new products.</p>
          <label>
            <input type="email" placeholder="Email" aria-label="Email" />
            <button aria-label="Submit email">→</button>
          </label>
        </form>
      </div>
      <div className="footer-bottom">
        <p>Copyrights@ 2026 All Rights</p>
        <div>
          <a href="#top">Terms & Conditions</a>
          <a href="#top">Shipping Policy</a>
          <a href="#top">Return & Refund</a>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
