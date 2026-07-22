import { Header } from "@/components/layout/header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Benefits } from "@/components/sections/benefits";
import { Catalog } from "@/components/sections/catalog";
import { ContactForm } from "@/components/sections/contact-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Catalog />
        <Benefits />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
