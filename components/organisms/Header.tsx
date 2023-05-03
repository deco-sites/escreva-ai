import NavItem from "$start/components/atoms/NavItem.tsx";
// import { navItemProps } from "$start/components/atoms/NavItem.tsx";

import BigButton from "$start/components/atoms/BigButton.tsx";
import { buttonProps } from "$start/components/atoms/BigButton.tsx";

const navItems = [
  // { itemName: "Bate-Papo", itemUrl: "#", iconId: "robo" },
  { itemName: "Blog", itemUrl: "#", iconId: "jornal" },
  { itemName: "Onde usar", itemUrl: "#", iconId: "mouse" },
  { itemName: "Fale conosco", itemUrl: "#", iconId: "email2" },
];

export default function Header() {
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

          <div class="md:hidden">
            <button class="focus:outline-none" type="button" aria-expanded="false" data-headlessui-state="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" name="hamburger-button" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div class="absolute inset-x-0 top-0 z-10 p-2 origin-top-right transform md:hidden opacity-100 translate-y-0" tabindex="-1" data-headlessui-state="open" id="headlessui-popover-panel-:r5:">
            <div class="overflow-hidden bg-white rounded-lg shadow-md p-2.5">
                <div class="flex justify-end">
                  <button type="button" data-headlessui-state="open">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" name="close-menu-button" class="text-gray-300 w-7 h-7 hover:text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                  </button>
                </div>
                <div class="pt-2 space-y-2">
                  <a href="/chat" class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block"><span class="flex items-center gap-1"><span>🤖</span>Bate-Papo</span></a>
                  <a href="https://blog.escreva.ai" class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block">
                      <span class="flex items-center gap-1">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
                        </svg>
                        Blog
                      </span>
                  </a>
                  <a href="/#casos-de-uso" class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block">
                      <span class="flex items-center gap-1">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"></path>
                        </svg>
                        Onde usar
                      </span>
                  </a>
                  <a href="" role="button" tabindex="0" class="transition-colors duration-200 stroke-black hover:text-sky-700 hover:stroke-sky-700 max-md:px-3 max-md:py-2 max-md:rounded max-md:hover:bg-gray-100 max-md:block">
                      <span class="flex items-center gap-1">
                        <svg class="text-xl font-bold stroke-inherit" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em;">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                        Fale Conosco
                      </span>
                  </a>
                  <a class="inline-flex items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-lg py-2 w-36 rounded-lg text-center" href="/login"><span class="w-full font-semibold text-base ">Entrar</span></a>
                </div>
            </div>
          </div>

        </div>
      </header>

    </div>
  );
}
