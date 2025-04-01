import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  const buttonClasses =
  "w-[425px] h-[425px] bg-gray-200 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-neutral-300 hover:text-white flex justify-center items-center p-4";
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-yellow-700 to-neutral-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
      <div>
      <button
        onClick={() => navigateTo("/")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Season 1"
      >
        <span className="text-xl font-semibold text-gray-800 mt-2">Season 1</span>
      </button>
      </div>

      <button
        onClick={() => navigateTo("/season2/week1")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Nest"
      >
        <img
          src="/Nest.png"
          width="400"
          height="250"
          alt="Weather2"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">Nest</span>
      </button>
      <button
        onClick={() => navigateTo("/season2/UltraUseEffect")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="UseEffect/Bie daalt"
      >
        <img
          src="/filter.png"
          width="400"
          height="250"
          alt="Weather2"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">UseEffect / Bie daalt</span>
      </button>
      <button
        onClick={() => navigateTo("")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Grid"
      >
        <span className="text-xl font-semibold text-gray-800 mt-2">Coming soon ...</span>
      </button>
      <button
        onClick={() => navigateTo("")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Grid"
      >
        <span className="text-xl font-semibold text-gray-800 mt-2">Coming soon ...</span>
      </button>
      <button
        onClick={() => navigateTo("")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Grid"
      >
        <span className="text-xl font-semibold text-gray-800 mt-2">Coming soon ...</span>
      </button>
    </div>
  );
}
