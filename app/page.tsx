import Concept from "@/components/concept";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ShopInfo from "@/components/ShopInfo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Concept />
        <Menu />
        <ShopInfo />
        <Footer />
      </main>
    </>
  );
}
