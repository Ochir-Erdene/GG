import { useRouter } from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { data } from "@/utils/index";

export default function Home() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((item) =>
      item.ModelName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="bg-neutral-100">
      <div className="sticky top-0">
        <div className="flex items-center pt-4">
          <div className="ml-4">
            <HiArrowNarrowLeft
              onClick={() => router.push("/")}
              className="w-[30px] h-[30px] fill-black hover:fill-gray-400 cursor-pointer"
            />
          </div>
          <h1 className="text-lg font-bold ml-8">Брэндүүд</h1>
        </div>
        <div className="mt-4 w-full h-[1px] bg-gray-200"></div>

        <div className="flex p-4 justify-between">
          <div className="flex items-center w-[177px] h-9 bg-white border-2 rounded-xl border-gray-200">
            <h1 className="p-4 text-sm font-bold">Шүүлт</h1>
            <div className="w-full flex justify-end pr-5 scale-125">
              <IoFilter className="" />
            </div>
          </div>
          <div className="p-4 flex items-center w-[177px] h-9 bg-white border-2 rounded-xl border-gray-200">
            <h1 className="p-4 text-sm font-bold">Эрэмбэлэх</h1>
            <div className="w-full flex justify-end scale-125">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="w-full  bg-neutral-100">
          <div className="flex justify-center pb-6">
            <input
              type="text"
              placeholder="Хайлт хийх"
              value={search}
              onChange={handleSearch}
              className="w-[354px] rounded-xl border-2 border-gray-200 p-3 focus:outline-none "
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4">
        {search && filteredItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Бараа олдсонгүй ...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(filteredItems.length ? filteredItems : data).map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/season3/s3/${item.id}`)}
                  className="cursor-pointer bg-white p-4 rounded-xl border-2 border-gray-200 shadow-sm flex flex-col justify-between h-full"
                >
                  <img
                    src={item.ImageUrl}
                    alt={item.ModelName}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">{item.ModelName}</h2>
                    <p className="text-sm text-gray-400">Mens</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-base font-semibold text-black">
                        {item.Price}
                      </p>
                      <div className="text-gray-400 scale-150">
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
