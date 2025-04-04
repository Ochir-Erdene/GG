import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";

export default function News() {
  const [grid, setGrid] = useState(true); // State for toggling between grid and list views
  const router = useRouter();
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch("https://mongol-api-rest.vercel.app/clothes"),
          fetch("https://mongol-api-rest.vercel.app/Instruments"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalTools"),
          fetch("https://mongol-api-rest.vercel.app/EthnicGroups"),
          fetch("https://mongol-api-rest.vercel.app/Provinces"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalFigures"),
        ]);

        const results = await Promise.all(responses.map((res) => res.json()));

        const fullData = {
          clothes: results[0]?.clothes || [],
          instru: results[1]?.instruments || [],
          tools: results[2]?.historicalTools || [],
          groups: results[3]?.ethnicGroups || [],
          provinces: results[4]?.provinces || [],
          historicalFigures: results[5]?.historicalFigures || [],
        };

        setData(fullData);
        setFilteredData(fullData);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    if (!data) return;

    const filterCategory = (category) =>
      data[category]?.filter((item) =>
        item.name?.toLowerCase().includes(query)
      ) || [];

    const newFilteredData = {
      clothes: filterCategory("clothes"),
      instru: filterCategory("instru"),
      tools: filterCategory("tools"),
      groups: filterCategory("groups"),
      provinces: filterCategory("provinces"),
      historicalFigures: filterCategory("historicalFigures"),
      touristAttractions: filterCategory("touristAttractions"),
    };

    setFilteredData(newFilteredData);
  };

  if (!filteredData)
    return (
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
      </div>
    );

  const isNoResults = Object.values(filteredData).every(
    (categoryItems) => categoryItems.length === 0
  );

  return (
    <div>
      <div>
        <div className="ml-3 mt-2 absolute">
          <HiArrowNarrowLeft
            onClick={() => router.push("/")}
            className="w-[30px] h-[30px] fill-black hover:fill-gray-400 cursor-pointer"
          />
        </div>

        <div className="w-full flex absolute ml-14 mt-1">
          <button
            onClick={() => setGrid(!grid)}
            className="absolute mb-22 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
          >
            {grid ? "List" : "Grid"}
          </button>
        </div>

        <div className="flex justify-center mt-5 ml-12">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={handleSearch}
            className="w-11/12 rounded-xl shadow-xl p-3"
          />
        </div>
      </div>

      {isNoResults ? (
        <div className="flex justify-center mt-6">
          <p className="text-xl font-bold">Oлдсонгүй..</p>
        </div>
      ) : (
        Object.entries(filteredData).map(
          ([category, items]) =>
            items.length > 0 && (
              <div key={category}>
                <div className="w-full flex justify-center mt-6">
                  <h1 className="text-3xl font-bold">{category}</h1>
                </div>

                <div
                  className={`${
                    grid
                      ? "grid grid-cols-3 gap-4 m-5 "
                      : "flex-col space-y-4 m-5 "
                  }`}
                >
                  {items.map((item) => (
                    <motion.div key={item.id} className="border rounded-xl p-3 flex cursor-pointer hover:scale-105 hover:border-black transition"
                      onClick={() => router.push(`/season2/UltraUseEffect/${item.name}`)}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {item.images && item.images.length > 0 && (
                        <div>
                          <img
                            className="w-[800px] h-[300px] object-cover rounded-lg"
                            src={item.images[0]}
                            alt={item.name}
                          />
                        </div>
                      )}
                      <div className="ml-4">
                        <h1 className="font-bold text-xl mb-3 mt-3">
                          {item.name}
                        </h1>
                        {Object.entries(item).map(([key, value]) =>
                          key !== "id" && key !== "images" && key !== "name" ? (
                            <div key={key} className="flex mb-2 flex-col">
                              <p className="font-bold">{key}: </p>
                              <p>{value}</p>
                            </div>
                          ) : null
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
        )
      )}
    </div>
  );
}
