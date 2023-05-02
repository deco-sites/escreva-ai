import Icon from "$start/components/atoms/Icons.tsx";
// import type { Props } from "$start/components/atoms/Icons.tsx";

export interface navItemProps {
  /** @description Nome item do menu */
  itemName?: string;

  /** @description Url do item do menu - não utilize caracteres especiais */
  itemUrl?: string;

  iconId?: string;
}

export default function NavItem(
  { itemName = "default", itemUrl = "/", iconId }: navItemProps,
) {
  return (
    <a
      href={itemUrl?.toString().replaceAll(",", "")
        .replaceAll(" ", "")}
      class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block"
    >
      <span class="flex items-center gap-1 font-semibold">
        <span>
          <Icon id={iconId} size="20" />
        </span>
        {itemName}
      </span>
    </a>
  );
}
