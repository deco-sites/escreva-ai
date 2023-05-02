import Jumbotron from "$start/components/organisms/Jumbotron.tsx";

import ImgSections from "$start/components/organisms/ImgSections.tsx";

import CardsSection from "$start/components/organisms/CardsSection.tsx";

import PriceSection from "$start/components/organisms/PriceSection.tsx";

import Footer from "$start/components/organisms/Footer.tsx";

export default function Site() {
  return (
    <main class="flex-1">
      <section class="flex-1 min-h-[90vh] ">
        <Jumbotron />
        <ImgSections />
        <CardsSection />
        <PriceSection />
        <Footer />
      </section>
    </main>
  );
}
