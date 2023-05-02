import NavItem from "$start/components/atoms/NavItem.tsx";
// import { navItemProps } from "$start/components/atoms/NavItem.tsx";

import BigButton from "$start/components/atoms/BigButton.tsx";
import { buttonProps } from "$start/components/atoms/BigButton.tsx";

const navItems = [
  { itemName: "Bate-Papo", itemUrl: "#", iconId: "robo" },
  { itemName: "Blog", itemUrl: "#", iconId: "jornal" },
  { itemName: "Onde usar", itemUrl: "#", iconId: "mouse" },
  { itemName: "Fale conosco", itemUrl: "#", iconId: "email2" },
];

export default function Header() {
  return (
    <div class="px-4 z-10 relative border-b border-gray-200/50">
      <header class="top-0 z-40 bg-white/70 backdrop-blur-2xl pr-3 lg:pr-0 flex md:justify-between m-auto pt-4 mb-3">
        <a class="flex items-center space-between gap-1" href="#">
          <img
            class="w-14 h-14"
            src="https://www.escreva.ai/img/logo.svg"
            alt="logo"
          />
          <span class="font-medium text-lg">Escreva Aí</span>
        </a>

        <div class="flex items-center">
          <div class="hidden space-x-6 font-medium md:flex items-center">
            {navItems.map((navItem) => (
              <NavItem
                itemName={navItem.itemName}
                itemUrl={navItem.itemUrl}
                iconId={navItem.iconId}
              />
            ))}

            <BigButton
              buttonName="Entrar"
              buttonUrl="#"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
