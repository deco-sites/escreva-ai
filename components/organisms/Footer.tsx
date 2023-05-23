export interface FooterProps {
  /** @description Titulo do Footer */
  title: string;

  /** @description Descrição 1 */
  desc_1: string;

  /** @description Descrição 2 */
  desc_2: string;

  /** @description Link 1: Titulo - Footer*/
  Link_1_title: string;
  /** @description Link 1: Url - Footer*/
  Link_1_url: string;

  /** @description Link 2 - Footer*/
  Link_2_title: string;
  /** @description Link 2: Url - Footer*/
  Link_2_url: string;

  /** @description Link 3 - Footer*/
  Link_3_title: string;
  /** @description Link 3: Url - Footer*/
  Link_3_url: string;

  /** @description Link 4 - Footer*/
  Link_4_title: string;
  /** @description Link 4: Url - Footer*/
  Link_4_url: string;
}

export default function FooterContainer(props: FooterProps) {
  return (
    <footer class="px-[80px] py-[40px] mt-6 min-h-[30vh] bg-slate-900 text-white font-sans">
      <section class="px-4 py-6 mx-auto container flex justify-between flex-col-reverse gap-12 md:gap-0 md:flex-row">
        <div class="flex flex-col gap-3">
          <p class="font-bold text-4xl">{props.title}</p>
          <div class="flex flex-col gap-[2px] text-lg leading-[1.4rem] text-gray-400 tracking-wide">
            <p>{props.desc_1}</p>
            <p>{props.desc_2}</p>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <p data-testid="tese" class="font-semibold text-4xl">Companhia</p>
          <div class="flex flex-col gap-[2px] ">
            <a class="text-lg leading-[1.4rem] text-gray-400" href="/chat">
              {props.Link_1_title}
            </a>
            <a
              class="text-lg leading-[1.4rem] text-gray-400"
              href="https://blog.escreva.ai"
            >
              {props.Link_2_title}
            </a>
            <a
              class="text-lg leading-[1.4rem] text-gray-400"
              href="/#casos-de-uso"
            >
              {props.Link_3_title}
            </a>
            <a
              role="button"
              tabindex="0"
              class="text-lg leading-[1.4rem] text-gray-400"
              href={props.Link_4_url}
            >
              {props.Link_4_title}
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

// export default function FooterContainer(props: FooterProps) {
//   return (
//     <footer class="px-[80px] py-[40px] mt-6 min-h-[30vh] bg-slate-900 text-white font-sans">
//       <section class="px-4 py-6 mx-auto container flex justify-between flex-col-reverse gap-12 md:gap-0 md:flex-row">
//         <div class="flex flex-col gap-3">
//           <p class="font-bold text-4xl">Escreva Aí</p>
//           <div class="flex flex-col gap-[2px] text-lg leading-[1.4rem] text-gray-400 tracking-wide">
//             <p>Copyright © 2023 Melhore Aí.</p>
//             <p>Todos os direitos reservados.</p>
//           </div>
//         </div>
//         <div class="flex flex-col gap-3">
//           <p data-testid="tese" class="font-semibold text-4xl">Companhia</p>
//           <div class="flex flex-col gap-[2px] ">
//             <a class="text-lg leading-[1.4rem] text-gray-400" href="/chat">
//               Bate-Papo
//             </a>
//             <a
//               class="text-lg leading-[1.4rem] text-gray-400"
//               href="https://blog.escreva.ai"
//             >
//               Blog
//             </a>
//             <a
//               class="text-lg leading-[1.4rem] text-gray-400"
//               href="/#casos-de-uso"
//             >
//               Onde usar
//             </a>
//             <a
//               role="button"
//               tabindex="0"
//               class="text-lg leading-[1.4rem] text-gray-400"
//               href="/"
//             >
//               Fale Conosco
//             </a>
//           </div>
//         </div>
//       </section>
//     </footer>
//   );
// }
