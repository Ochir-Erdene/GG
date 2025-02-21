import { useState, useEffect } from "react";

export default function News() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((name) =>
      name.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGamers(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])


  return (
    <div>
      <div className="flex justify-center mt-5">
        <input type="text" placeholder="Search by name..." value={search} onChange={handleSearch}
          className='w-11/12 rounded-xl shadow-xl p-3' />
      </div>

      <div className="grid grid-cols-4 gap-4 m-5">
        {data?.clothes?.map((item) => (
          <div key={item.id} className="border rounded-xl p-3">
            <img
              className="w-full h-[300px] object-cover"
              src={item.images[0]}
            />
            <h1 className="font-bold text-xl mb-3">{item.name}</h1>
            <div className="flex mb-2"><p className="font-bold">Used materials: </p> <p>{item.materials}</p></div>
            <div className="flex mb-2 flex-col"><p className="font-bold">Description: </p> <p>{item.description}</p></div>
            <div className="flex"><p className="font-bold">timePeriod: </p> <p>{item.timePeriod}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}