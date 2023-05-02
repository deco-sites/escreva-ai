import BigButton from "$start/components/atoms/BigButton.tsx";
import { buttonProps } from "$start/components/atoms/BigButton.tsx";

export default function MainBanner() {
  return (
    <section class="container px-4 pb-12 lg:pt-4 mx-auto">
      <div class="pt-6 grid items-center 2xl:gap-10 2xl:grid-cols-2">
        <div>
          <div class="space-y-5 container">
            <h1 class="text-[26px] leading-[32px] sm:text-3xl md:text-5xl font-bold text-black xl:w-4/12 2xl:w-auto">
              Escreva melhor e mais rápido.
            </h1>
            <p class="text-base md:text-lg lg:text-xl font-medium text-gray-500 xl:w-2/3 2xl:w-auto">
              Com Escreva Aí, você pode criar textos profissionais em questão de
              segundos e economizar horas de trabalho manual.
            </p>
          </div>

          <a
            class="inline-flex items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-lg mt-8 text-base bg-black-600"
            href="#"
          >
            <span class="w-full font-semibold text-base group-hover:-translate-x-1.5 transition-transform">
              Teste grátis
            </span>
            <svg
              class="inline-block h-6 group-hover:translate-x-0.5 transition-transform group-hover:scale-110"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
