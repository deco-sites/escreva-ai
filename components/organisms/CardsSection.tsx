import Card, { Props as CardProps } from "$start/components/atoms/Card.tsx";

const mockup = [
  {
    iconId: "foguete" as const,
    cardTitle: "Anúncios",
    cardText: "Crie textos impactantes para anúncios publicitários de sucesso.",
    cardUrl: "#",
  },
  {
    iconId: "jornal2" as const,
    cardTitle: "Artigos",
    cardText:
      "Escreva conteúdos impressionantes para seu blog com a Escreva Aí.",
    cardUrl: "#",
  },
  {
    iconId: "escrita" as const,
    cardTitle: "Copywriting",
    cardText: "Produza textos persuasivos para ações de Marketing e Vendas.",
    cardUrl: "#",
  },
  {
    iconId: "formatura" as const,
    cardTitle: "Discursos",
    cardText: "Escreva o esboço e melhore-o rapidamente com Escreva AI.",
    cardUrl: "#",
  },
  {
    iconId: "email" as const,
    cardTitle: "Emails",
    cardText: "Passe sua mensagem com confiança, profissionalidade e clareza.",
    cardUrl: "#",
  },
  {
    iconId: "raio" as const,
    cardTitle: "Marketing",
    cardText: "Atraia clientes com conteúdos relevantes e criativos.",
    cardUrl: "#",
  },
];

export interface Props {
  cards: CardProps[];
}

function CardsSection({ cards = mockup }: Props) {
  return (
    <section class="bg-gray-100">
      <div class="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28">
        {/* Start Titles Div */}
        <div class="relative mb-10 flex flex-col gap-4 text-center lg:mb-16">
          <p class="uppercase font-black text-sky-500 tracking-[0.5px] leading-[1.5em] text-md opacity-60">
            Casos de Uso
          </p>

          <h2 class="text-4xl text-gray-900 font-extrabold md:text-5xl">
            Para todos os gostos.
          </h2>

          <p class="text-center leading-[1.4rem] tracking-[-0.2px] text-gray-700 text-2xl">
            Podemos te ajudar em diversas situações.
          </p>
        </div>
        {/* End Titles Div */}

        {/* Start Cards Div */}
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-10">
          {cards.map((item) => <Card {...item} />)}
        </div>
        {/* End Cards Div */}
      </div>
    </section>
  );
}

export default CardsSection;
