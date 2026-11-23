import { AboutAndFaq, Instagram, NewArrivals, TrustStrip } from "./components/ContentSections";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { BottleScroll } from "./components/BottleScroll";
import { Categories, FeaturedProducts } from "./components/ProductSections";

export default function App() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BottleScroll />
      <TrustStrip />
      <NewArrivals />
      <AboutAndFaq />
      <Instagram />
      <Footer />
    </main>
  );
}
