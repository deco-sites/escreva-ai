export default function PriceTree() {
  return (
    <section class="relative flex flex-col gap-4 h-[450px] w-[300px] cursor-pointer items-center justify-between rounded-md shadow hover:shadow-lg transition-shadow border border-gray-300 bg-white py-4 peer-checked:border-blue-500 peer-checked:[&amp;_.default]:hidden peer-checked:[&amp;_.active]:block">
      <section class="absolute right-0 top-0 w-[78px] m-auto h-[32px] self-end inline-flex items-center gap-1 bg-emerald-200 text-emerald-600 font-bold p-2 rounded text-sm">
        <p>45% OFF</p>
      </section>
      <h2 class="leading-3 font-medium text-gray-500 text-center">
        Profissional
      </h2>
      <h2 class="text-xl font-bold text-gray-800 sm:text-3xl font-serif">
        R$ 44,99
      </h2>
      <ol class="flex-1 space-y-3">
        <li class="flex items-center gap-2 leading-3 text-gray-700 font-medium text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#16a34a"
            class="w-6 h-6 fill-green-600"
          >
            <path
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
          <span>50.000 palavras</span>
        </li>
        <li class="flex items-center gap-2 leading-3 text-gray-700 font-medium text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#16a34a"
            class="w-6 h-6 fill-green-600"
          >
            <path
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
          <span>Editor de texto</span>
        </li>
        <li class="flex items-center gap-2 leading-3 text-gray-700 font-medium text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#16a34a"
            class="w-6 h-6 fill-green-600"
          >
            <path
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
          <span>Suporte via chat e telefone</span>
        </li>
        <li class="flex items-center gap-2 leading-3 text-gray-700 font-medium text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#16a34a"
            class="w-6 h-6 fill-green-600"
          >
            <path
              fill-rule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
          <span>Não expira</span>
        </li>
      </ol>
      <div class="px-2 w-full grid place-content-center">
        <button class="inline-flex items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-lg py-4 mb-3">
          <span class="w-full font-semibold text-base group-hover:-translate-x-1.5 transition-transform">
            Sou profissional
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
        </button>
      </div>
    </section>
  );
}
