import "./App.css";
import { Header } from "./assets/components/Header";
import { Fondos } from "./assets/components/Fondos";
import Hero from "./assets/components/Hero";
import Category from "./assets/components/Category";
import { TopSelling } from "./assets/components/TopSelling";
import { EasyAndFast } from "./assets/components/EasyAndFast";
import { Testimonials } from "./assets/components/Testimonials";
import { Carrousel } from "./assets/components/Carrousel";
import { Subscriber } from "./assets/components/Subscriber";
import { Footer } from "./assets/components/Footer";

function App() {
  return (
    <>
      <div className="contenedor_global">
        <Fondos />
        <Header />
        <Hero />
        <Category />
        <TopSelling />
        <EasyAndFast />
        <Testimonials />
        <Carrousel />
        <Subscriber />
        <Footer />
      </div>
    </>
  );
}

export default App;
