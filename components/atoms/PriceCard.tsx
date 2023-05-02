import SectionButton from "$start/components/atoms/SectionButton.tsx";
// import type { Props } from "$start/components/atoms/SectionButton.tsx";

export interface priceCardProps {
  /** @description  Título do cartão. */
  cardTitle?: string;

  /** @description Texto do cartão. */
  cardPrice?: string;
}

export default function PriceCard(
  { cardTitle = "default", cardPrice = "0,00" }: priceCardProps,
) {
  return (
    <section class="relative flex flex-col gap-4 h-[450px] w-[300px] cursor-pointer items-center justify-between rounded-md shadow hover:shadow-lg transition-shadow border border-gray-300 bg-white py-4 peer-checked:border-blue-500 peer-checked:[&_.default]:hidden peer-checked:[&_.active]:block">
      <h2 class="leading-3 font-medium text-gray-500 text-center">
        {cardTitle}
      </h2>
      <h2 class="text-xl font-bold text-gray-800 sm:text-3xl">
        R$ {cardPrice}
      </h2>

      <div class="px-2 w-full grid place-content-center">
        <SectionButton
          buttonName="Quero Testar"
          buttonUrl="#"
        />
      </div>
    </section>
  );
}
