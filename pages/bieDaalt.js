import { useRouter } from "next/router";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

const data = [
  { id: 1, Name: "Ochir-Erdene", number: "94889699" },
  { id: 2, Name: "Shine-Erdene", number: "94889699" },
  { id: 3, Name: "S.Temuulen", number: "94889699" },
  { id: 4, Name: "Khanbileg", number: "94889699" },
  { id: 5, Name: "G.Anar", number: "94889699" },
  { id: 6, Name: "Enh-Uchral", number: "94889699" },
  { id: 7, Name: "Tsel,eg", number: "94889699" },
  { id: 8, Name: "Enhtugs", number: "94889699" },
  { id: 9, Name: "Anar-Erdene", number: "94889699" },
  { id: 10, Name: "Tergel", number: "94889699" },
  { id: 12, Name: "E.Temuujin", number: "94889699" },
  { id: 13, Name: "Enkhjav", number: "94889699" },
  { id: 14, Name: "B.Temuujin", number: "94889699" },
  { id: 15, Name: "Sh.Temuujin", number: "94889699" },
  { id: 16, Name: "Tugs-Aralt", number: "94889699" },
  { id: 17, Name: "Amartuvshin", number: "94889699" },
  { id: 18, Name: "Dalaisuren", number: "94889699" },
  { id: 19, Name: "Choi Od-Ser", number: "94889699" },
  { id: 20, Name: "Emily", number: "94889699" },
];

export default function News() {
  const router = useRouter();
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((student) =>
      student.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="h-full bg-gradient-to-r from-indigo-100 to-blue-500">
      {/* Header */}
      <div className="h-auto w-full flex items-center justify-center">
        <div className="ml-12 w-full absolute">
          <HiArrowNarrowLeft
            onClick={() => router.push("/")}
            className="w-[30px] h-[30px] cursor-pointer hover:fill-slate-300"
          />
        </div>
        <h1 className="text-black mt-5 font-bold text-xl mb-3">
          Сурагчдын жагсаалт
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearch}
          className="w-10/12 outline-none rounded-xl shadow-xl p-3"
        />
        <button
          onClick={() => setGrid(!grid)}
          className="bg-black text-white p-2 rounded-md hover:bg-blue-800"
        >
          {grid ? "List-руу шилжих" : "Grid View руу шилжих"}
        </button>
      </div>

      {/* Filtered Students */}
      <div className="mt-5 flex justify-center">
        <div className="w-11/12">
          {filteredStudents.length > 0 ? (
            <div
              className={
                grid ? "grid grid-cols-2 gap-4" : "space-y-4"
              }
            >
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="shadow-2xl bg-gradient-to-r from-white to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-xl p-4 flex flex-col text-black"
                >
                  <h1 className="font-bold text-2xl mb-3">
                    {student.Name}
                  </h1>
                  <h1>Сурагчдын дугаар: {student.number}</h1>
                </div>
              ))}
            </div>
          ) : (
            <p>Сурагч олдсонгүй.</p>
          )}
        </div>
      </div>
    </div>
  );
}
