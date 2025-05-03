import { useState } from "react";

const data = [
  {
    id: 1,
    Name: "Phone",
    price: "600$",
    color: "Black",
    items: [{ name: "Case", quantity: "5" }],
  },
  {
    id: 2,
    Name: "MacBook",
    price: "1600$",
    color: "Greay",
    items: [{ name: "Case", quantity: "12" }],
  },
  {
    id: 3,
    Name: "Watch",
    price: "6200$",
    color: "Gold, Black",
    items: [{ name: "Glass", quantity: "3" }],
  },
  {
    id: 4,
    Name: "AirPods",
    price: "150$",
    color: "White",
    items: [{ name: "Case", quantity: "15" }],
  },
  {
    id: 5,
    Name: "KeyChain",
    price: "20$",
    color: "White-Gray",
    items: [{ name: "Chain", quantity: "21" }],
  },
  {
    id: 6,
    Name: "Card Holder",
    price: "50$",
    color: "Black-White",
    items: [{ name: "Colors", quantity: "4" }],
  },
  {
    id: 7,
    Name: "Liver",
    price: "813,000$",
    color: "Pink",
    items: [{ quantity: "1" }],
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredGamers, setFilteredGamers] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((gamer) =>
      gamer.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGamers(filtered);
  };

  return (
    <div className="flex">
      <div className="w-[20%] h-screen text-center ">
        <img
          className="w-32 mx-auto m-8"
          src="https://nhs.edu.mn/favicon.ico"
        />
        <h1 className="font-semibold sm:w-full">NEST EDUCATION IT SCHOOL</h1>
        <h1 className="text-sm mt-4 sm:w-full">Чинбат Очир-Эрдэнэ</h1>
        <h1 className="text-xs sm:w-full">Анги: 11a</h1>
        <button className="w-[220px] mx-auto my-4 h-[50px] bg-blue-600 rounded-lg text-center text-white">
          Go to Lab 2
        </button>
        <button className="w-[220px] mx-auto h-[50px] bg-blue-600 rounded-lg text-center text-white">
          Go to Lab 3
        </button>
      </div>

      <div className="w-[80%] h-screen bg-gray-100">
        <div className="flex m-4 justify-between">
          <div className="flex">
          <button className="rounded-lg font-semibold w-[150px] h-[50px] bg-black text-white text-center">
            Харилцагчид
          </button>
          <div className="flex justify-center w-[500px]">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={handleSearch}
              className="w-11/12 rounded-xl shadow-xl p-3"
            />
          </div>
          </div>
          <button className="rounded-lg  w-[150px] h-[50px] bg-orange-300 text-white text-center">
            Бараа Бүртгэх
          </button>
        </div>
      </div>
    </div>
  );
}
