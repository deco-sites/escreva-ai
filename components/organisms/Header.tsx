import { useState } from "preact/hooks";

import NavItem from "$start/components/atoms/NavItem.tsx";

import BigButton from "$start/components/atoms/BigButton.tsx";

const navItems = [
  { itemName: "Blog", itemUrl: "#", iconId: "jornal" },
  { itemName: "Onde usar", itemUrl: "#", iconId: "mouse" },
  { itemName: "Fale conosco", itemUrl: "#", iconId: "email2" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div class="px-4 z-10 relative border-b border-gray-200/50">
      <header class="top-0 z-40 bg-white/70 backdrop-blur-2xl pr-3 lg:pr-0 flex justify-between 2xl:justify-between 2xl:px-44 m-auto pt-4 mb-3">
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
            <a
              href="#"
              class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block"
            >
              <span class="flex items-center gap-1 font-semibold">
                <span>
                  🤖
                </span>
                Bate-Papo
              </span>
            </a>
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

          {/* Mobile Version */}
          <div class="md:hidden">
            <button
              isMenuOpen={isMenuOpen}
              onClick={handleClick}
              class="focus:outline-none"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                name="hamburger-button"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                >
                </path>
              </svg>
            </button>
            {/* <ButtonHamburger isMenuOpen={isMenuOpen} onClick={handleClick} /> */}
          </div>

          {/* Here */}
          <div class={` ${isMenuOpen ? "block flex" : "hidden"}`}>
            <div
              class="absolute inset-x-0 top-0 z-10 p-4 origin-top-right transform md:hidden opacity-100 translate-y-0"
              tabindex="-1"
              data-headlessui-state="open"
              id="headlessui-popover-panel-:r5:"
            >
              <div class="overflow-hidden bg-white rounded-lg shadow-md p-2.5">
                <div class="flex justify-end">
                  <button
                    isMenuOpen={isMenuOpen}
                    onClick={handleClick}
                    type="button"
                    data-headlessui-state="open"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      name="close-menu-button"
                      class="text-gray-300 w-7 h-7 hover:text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      >
                      </path>
                    </svg>
                  </button>
                </div>

                <a
                  href="#"
                  class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block"
                >
                  <span class="flex items-center gap-1 font-semibold">
                    <span>
                      🤖
                    </span>
                    Bate-Papo
                  </span>
                </a>

                {navItems.map((navItem) => (
                  <NavItem
                    itemName={navItem.itemName}
                    itemUrl={navItem.itemUrl}
                    iconId={navItem.iconId}
                  />
                ))}

                <div class="mt-4">
                  <BigButton
                    buttonName="Entrar"
                    buttonUrl="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
