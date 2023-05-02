import LeftContainer from "$start/components/atoms/LeftContainer.tsx";
// import type { props } from "$start/components/atoms/LeftContainer.tsx";

import RightContainer from "$start/components/atoms/RightContainer.tsx";
// import type { props } from "$start/components/atoms/RightContainer.tsx";

export default function ImgSections() {
  return (
    <section class="container px-4 pb-12 mx-auto space-y-12 sm:pb-16 md:pb-20 xl:pb-28 sm:space-y-16 xl:space-y-24">
      {/* Section: Escreva como um profissional. */}
      <LeftContainer
        sectionTitle="Escreva como um profissional."
        sectionText="Crie textos incríveis em segundos e destaque-se com a qualidade do seu conteúdo."
        imgUrl="https://www.escreva.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofessional-robot.2f3e6aae.webp&w=1080&q=75"
        buttonName="Experimente já"
        buttonUrl="#"
      />

      {/* Section: Experimente a inovação. */}
      <RightContainer
        sectionTitle="Experimente a inovação."
        sectionText="Use a ferramenta como seu escritor pessoal. Crie conteúdos únicos e impactantes. Transforme suas ideias em verdadeiras obras de arte."
        imgUrl="https://www.escreva.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpainting-robot.4693ce4f.webp&w=1080&q=75"
        buttonName="Experimente já"
        buttonUrl="#"
      />

      {/* Section: Foque no que interessa. */}
      <LeftContainer
        sectionTitle="Foque no que interessa."
        sectionText="Deixe que a inteligência artificial da Escreva Aí cuide da revisão e do aperfeiçoamento de seus textos."
        imgUrl="https://www.escreva.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffocused-robot.8e8b9ac0.webp&w=750&q=75"
        buttonName="Experimente já"
        buttonUrl="#"
      />
    </section>
  );
}
