import Image from "$start/components/atoms/Image.tsx";
import SectionButton from "$start/components/atoms/SectionButton.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface leftContainerProps {
  /** @description Titulo da seção */
  sectionTitle?: string;

  /** @description Parágrafo da seção */
  sectionText?: string;

  /** @description Url da imagem da seção */
  secImage?: LiveImage;

  /** @description Titulo e Url do botão */
  buttonName?: string;

  buttonUrl?: string;
}

export default function LeftContainer(
  {
    sectionTitle,
    sectionText,
    secImage,
    altText,
    title,
    buttonName,
    buttonUrl,
  }: leftContainerProps,
) {
  return (
    <section class="lg:flex-row flex flex-col justify-between space-y-6 lg:space-y-0 lg:space-x-10 items-center">
      {/* Image Left */}
      <div class="w-full lg:w-1/2">
        <Image
          src={secImage}
          className="w-full max-w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Text Right  */}
      <div class="w-full lg:w-1/2">
        <div class="space-y-5 sm:space-y-6">
          <h3 class="text-3xl font-semibold md:text-4xl">
            {sectionTitle}
          </h3>
          <p class="w-full text-lg sm:w-4/5">
            {sectionText}
          </p>

          {/* Button */}
          <SectionButton
            buttonName={buttonName}
            buttonUrl={buttonUrl}
          />
        </div>
      </div>
    </section>
  );
}
