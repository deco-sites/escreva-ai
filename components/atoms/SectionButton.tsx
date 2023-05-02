export interface buttonProps {
  /** @description Nome item do botão */
  buttonName?: string;

  /** @description Url do botão - não utilize caracteres especiais*/
  buttonUrl?: string;
}

export default function SectionButton(
  { buttonName = "default", buttonUrl = "/" }: buttonProps,
) {
  return (
    <a
      class="inline-flex items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-lg mt-8"
      href={buttonUrl?.toString().replaceAll(",", "").replaceAll(" ", "")}
    >
      <span class="w-full font-semibold text-base">
        {buttonName}
      </span>
    </a>
  );
}
