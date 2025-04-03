import { useState } from "react";
import { useRouter } from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="ml-3 w-full mt-6 absolute">
        <HiArrowNarrowLeft
          onClick={() => router.push("/")}
          className="w-[30px] h-[30px] fill-black hover:fill-gray-400 cursor-pointer"
        />
      </div>

      <div className="w-full h-screen bg-gray-300 pt-20">
        <div className="w-[1650px] ml-3 h-12 flex items-center justify-center bg-blue-700">
          <p className="text-white text-xl">Nest High School</p>
        </div>

        <div className="w-full flex flex-col items-center">
          <h1 className="pt-10 text-5xl font-semibold">Welcome to Nest School</h1>
          <p className="pt-5 text-center w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            { " " }industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className="flex pt-4">
            <button
              onClick={handleClick}
              className="w-[100px] h-[40px] bg-blue-700 text-white rounded-lg hover:bg-sky-700"
            >
              Click me
            </button>

            {isModalOpen && (
              <div className="m-4 absolute w-[110px] h-[100px] bg-white rounded-xl flex items-center justify-center flex-col z-50 shadow-lg">
                <h1 className="font-semibold">Modal Title</h1>
                <p className="text-sm text-gray-700 mb-1">Clicked: {count} times</p>
                <button
                  className="w-[53px] h-[25px] bg-red-700 text-white rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            )}

            <p className="pl-3 text-md text-gray-600">Clicked {count} times</p>
          </div>
        </div>
      </div>
    </div>
  );
}
