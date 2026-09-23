import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import ProductShowcase from "./components/product/ProductShowcase";
import ProductFeatures from "./components/product/ProductFeatures";
import ProductIngredients from "./components/product/ProductIngredients";
import EarlyAccessPopup from "./components/popup/EarlyAccessPopup";
import PreorderSection from "./components/preorder/PreorderSection";

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">

      <Hero />

      <About />

      <ProductShowcase/>
      <ProductFeatures/>
      <ProductIngredients/>
      <PreorderSection/>
      </main>
      <EarlyAccessPopup/>

      <section
        id="ingredients"
        className="flex min-h-screen items-center justify-center border-t border-white/10"
      >
        <h2 className="font-[var(--font-heading)] text-4xl font-bold">
          Ingredients
        </h2>
      </section>

      <section
        id="preorder"
        className="flex min-h-screen items-center justify-center border-t border-white/10"
      >
        <h2 className="font-[var(--font-heading)] text-4xl font-bold">
          Preorder
        </h2>
      </section>

      <section
        id="login"
        className="flex min-h-screen items-center justify-center border-t border-white/10"
      >
        <h2 className="font-[var(--font-heading)] text-4xl font-bold">
          Login
        </h2>
      </section>
    </main>
  );
}

export default App;