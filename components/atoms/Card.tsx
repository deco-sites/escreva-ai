import Icon from "$start/components/atoms/Icons.tsx";
// import type { Props } from "$start/components/atoms/Icons.tsx";

export interface cardProps {
  /** @description Emoji do cartão. */
  iconId?: string;

  /** @description  Título do cartão. */
  cardTitle?: string;

  /** @description Texto do cartão. */
  cardText?: string;

  /** @description  URL ao clicar no cartão. */
  cardUrl?: string;
}

export default function Card(
  { iconId = "🤖", cardTitle = "default", cardText = "default", cardUrl = "/" }:
    cardProps,
) {
  return (
    <a
      class="p-6 cursor-pointer flex flex-col gap-2 py-[24px] px-[40px] transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl text-white feature-block"
      href={cardUrl?.toString().replaceAll(",", "")
        .replaceAll(" ", "")}
      style="background: linear-gradient(208deg, rgb(56, 189, 248) -9%, rgb(10, 0, 31) 100%);"
    >
      <p>
        <Icon id={iconId} size="24" />
      </p>
      <h4 class="font-bold tracking-normal leading-[1.4em] text-lg md:text-3xl">
        {cardTitle}
      </h4>
      <p>
        {cardText}
      </p>
    </a>
  );
}
