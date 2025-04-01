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
        onClick={() => navigateTo("/season1/cv")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="CV"
      >
        <img
          src="/CV2.png"
          width="400"
          height="250"
          alt="CV"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">CV</span>
      </button>
      </div>

      <button
        onClick={() => navigateTo("/season1/weather")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Weather"
      >
        <img
          src="/Weather2.png"
          width="400"
          height="250"
          alt="Weather2"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">Weather</span>
      </button>
      <button
        onClick={() => navigateTo("/season1/filter")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Filter"
      >
        <img
          src="/filter.png"
          width="400"
          height="250"
          alt="Weather2"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">Filter</span>
      </button>
      <button
        onClick={() => navigateTo("/season1/grid")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Grid"
      >
         <img
          src="/grid.png"
          width="400"
          height="250"
          alt="Weather2"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">Grid</span>
      </button>
      <button
        onClick={() => navigateTo("/season1/bieDaalt")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Bie Daalt"
      >
         <img
          src="/bie daalt.png"
          width="400"
          height="250"
          alt="Weather2"
          className="object-cover rounded-xl"
        />
        <span className="text-xl font-semibold text-gray-800 mt-2">Bie Daalt</span>
      </button>
      <button
        onClick={() => navigateTo("/season2/router")}
        className={`${buttonClasses} flex flex-col`}
        aria-label="Season 2"
      >
        <span className="text-xl font-semibold text-gray-800 mt-2">Season 2</span>
      </button>
    </div>
  );
}
