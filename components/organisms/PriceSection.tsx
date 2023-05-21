import PriceOne from "$start/components/molecules/PriceOne.tsx";
import PriceTwo from "$start/components/molecules/PriceTwo.tsx";
import PriceTree from "$start/components/molecules/PriceTree.tsx";

export interface PriceSectionProps {
  title: string;
  description: string;
  description2: string;
}

export default function PriceSection(props: PriceSectionProps) {
  return (
    <section class="grid place-content-center gap-3 py-12">
      <div class="w-full md:min-w-[423px] space-y-6">
        {/* Start Titles Div */}
        <section class="space-y-3">
          <h2 class="text-sm text-center pt-2 flex items-center justify-center gap-2 uppercase font-black text-gray-500 tracking-[0.5px] leading-[1.5em] text-md">
            <span class="text-lg">🚀</span>
            <span>Preços</span>
          </h2>

          <h2 class="text-4xl text-gray-900 font-extrabold md:text-5xl text-center">
            {props.title}
          </h2>

          <h3 class="text-xl text-center text-gray-500 max-w-3xl m-auto">
            {props.description}
          </h3>

          <p class="text-center italic pt-2 pb-2 font-semibold text-gray-500">
            {props.description2}
          </p>
        </section>
        {/* End Titles Div */}

        {/* Start PriceCards Div */}
        <section class="flex justify-center pb-6 items-center flex-col md:items-start md:flex-row gap-5">
          <PriceOne />
          <PriceTwo />
          <PriceTree />
        </section>
        {/* End PriceCards Div */}
      </div>
    </section>
  );
}
