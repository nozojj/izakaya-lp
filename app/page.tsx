import Concept from "../components/Concept";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import ShopInfo from "../components/ShopInfo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-24">
        <Hero />
        <Concept />
        <Menu />
        <ShopInfo />
        <Footer />
      </main>
    </>
  );
}
