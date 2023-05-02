import Card from "$start/components/atoms/Card.tsx";
// import type { Props } from "$start/components/atoms/Card.tsx";

const Cards = [
  {
    iconId: "foguete",
    cardTitle: "Anúncios",
    cardText: "Crie textos impactantes para anúncios publicitários de sucesso.",
    cardUrl: "#",
  },
  {
    iconId: "jornal2",
    cardTitle: "Artigos",
    cardText:
      "Escreva conteúdos impressionantes para seu blog com a Escreva Aí.",
    cardUrl: "#",
  },
  {
    iconId: "escrita",
    cardTitle: "Copywriting",
    cardText: "Produza textos persuasivos para ações de Marketing e Vendas.",
    cardUrl: "#",
  },
  {
    iconId: "formatura",
    cardTitle: "Discursos",
    cardText: "Escreva o esboço e melhore-o rapidamente com Escreva AI.",
    cardUrl: "#",
  },
  {
    iconId: "email",
    cardTitle: "Emails",
    cardText: "Passe sua mensagem com confiança, profissionalidade e clareza.",
    cardUrl: "#",
  },
  {
    iconId: "raio",
    cardTitle: "Marketing",
    cardText: "Atraia clientes com conteúdos relevantes e criativos.",
    cardUrl: "#",
  },
];

export default function CardsSection() {
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
          {Cards.map((card) => (
            <Card
              iconId={card.iconId}
              cardTitle={card.cardTitle}
              cardText={card.cardText}
              cardUrl={card.cardUrl}
            />
          ))}
        </div>
        {/* End Cards Div */}
      </div>
    </section>
  );
}
