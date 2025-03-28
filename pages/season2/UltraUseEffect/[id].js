import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

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
          instruments: results[1]?.instruments || [],
          tools: results[2]?.historicalTools || [],
          groups: results[3]?.ethnicGroups || [],
          provinces: results[4]?.provinces || [],
          historicalFigures: results[5]?.historicalFigures || [],
        };

        let foundItem = null;
        Object.values(fullData).forEach((category) => {
          if (!foundItem) {
            foundItem = category.find((item) => item.id === id);
          }
        });

        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Item not found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-.2s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-.4s]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
        <p className="text-2xl font-semibold text-red-600">{error}</p>
        <button
          className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 py-10 px-6 relative ${isModalOpen ? "overflow-hidden" : ""}`}>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-10"></div>
      )}

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 relative z-20">
        <h2 className="text-3xl font-extrabold text-gray-800">{item.name}</h2>
        <p className="text-lg text-gray-600 mt-2">{item.description}</p>

        {item?.images?.length > 0 && (
          <div className="mt-6">
            <img
              onClick={() => setIsModalOpen(true)}
              src={item.images[0]}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            />
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black p-4 rounded-lg shadow-lg relative ">
              <img src={item.images[0]} alt={item.name} onClick={() => setIsModalOpen(false)} className="w-full h-[500px] rounded-md hover:scale-105 transition"/>
            </div>
          </div>
        )}

        {/* busd data renderleh */}
        <div className="mt-6 space-y-4">
          {Object.entries(item).map(
            ([key, value]) =>
              key !== "id" &&
              key !== "images" &&
              key !== "name" &&
              key !== "description" && (
                <div key={key} className="p-4 bg-gray-100 rounded-md hover:scale-105 transition">
                  <p className="font-semibold text-gray-700 capitalize">{key}:</p>
                  <p className="text-gray-600">{value}</p>
                </div>
              )
          )}
        </div>

        <div className="mt-8">
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

