import Image from "$start/components/atoms/Image.tsx";
import SectionButton from "$start/components/atoms/SectionButton.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface rightContainerProps {
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

export default function RightContainer(props: rightContainerProps) {
  return (
    <section class="lg:flex-row flex flex-col justify-between space-y-6 lg:space-y-0 lg:space-x-10 items-center">
      {/* Text Left  */}
      <div class="w-full lg:w-1/2">
        <div class="space-y-5 sm:space-y-6">
          <h3 class="text-3xl font-semibold md:text-4xl">
            {props.sectionTitle}
          </h3>
          <p class="w-full text-lg sm:w-4/5">
            {props.sectionText}
          </p>

          {/* Button */}
          <SectionButton
            buttonName={props.buttonName}
            buttonUrl={props.buttonUrl}
          />
        </div>
      </div>

      {/* Image Right */}
      <div class="w-full lg:w-1/2">
        <Image
          src={props.secImage}
          className="w-full max-w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
}
