import LeftContainer from "$start/components/atoms/LeftContainer.tsx";
import RightContainer from "$start/components/atoms/RightContainer.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface ImgSectionsProps {
  // Seção 1 -------------------------------------

  /** @description Titulo da seção 1 */
  title_1: string;
  /** @description Descrição da seção 1*/
  description_1: string;
  imgUrl_1: LiveImage;
  /** @description Texto botão da seção 1*/
  buttonText_1: string;
  /** @description Link do botão da seção 1*/
  buttonUrl_1?: string;

  // -----------------------------------------------

  /** @description ---------------------------------*/

  // Seção 2 -------------------------------------

  /** @description Titulo da seção 1 */
  title_2: string;
  /** @description Descrição da seção 2*/
  description_2: string;
  imgUrl_2: LiveImage;
  /** @description Texto botão da seção 2*/
  buttonText_2: string;
  /** @description Link do botão da seção 2*/
  buttonUrl_2?: string;

  // -----------------------------------------------

  /** @description ---------------------------------*/

  // Seção 3 -------------------------------------

  /** @description Titulo da seção 1 */
  title_3: string;
  /** @description Descrição da seção 3*/
  description_3: string;
  imgUrl_3: LiveImage;
  /** @description Texto botão da seção 3*/
  buttonText_3: string;
  /** @description Link do botão da seção 3*/
  buttonUrl_3?: string;

  // -----------------------------------------------
}

export default function ImgSections(props: ImgSectionsProps) {
  return (
    <section class="container px-4 pb-12 mx-auto space-y-12 sm:pb-16 md:pb-20 xl:pb-28 sm:space-y-16 xl:space-y-24">
      {/* Section: Escreva como um profissional. */}
      <LeftContainer
        sectionTitle={props.title_1}
        sectionText={props.description_1}
        secImage={props.imgUrl_1}
        buttonName={props.buttonText_1}
        buttonUrl={props.buttonUrl_1 || "#"}
      />

      {/* Section: Experimente a inovação. */}
      <RightContainer
        sectionTitle={props.title_2}
        sectionText={props.description_2}
        secImage={props.imgUrl_2}
        buttonName={props.buttonText_2}
        buttonUrl={props.buttonUrl_2 || "#"}
      />

      {/* Section: Foque no que interessa. */}
      <LeftContainer
        sectionTitle={props.title_3}
        sectionText={props.description_3}
        secImage={props.imgUrl_3}
        buttonName={props.buttonText_3}
        buttonUrl={props.buttonUrl_3 || "#"}
      />
    </section>
  );
}
