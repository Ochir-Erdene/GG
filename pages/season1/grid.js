import { useRouter } from "next/router";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function News() {
    const [grid, setGrid] = useState(true);
    const router = useRouter();

    const data = [
        {
            id : 1,
            title : "Test 1",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            title: "Test 2",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 3,
            title: "Test 3",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 4,
            title: "Test 4",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        
    ];

    return (
        <div className="w-full h-screen flex flex-col align items-center bg-white">
            <div className="ml-12 w-full h-[100px] flex items-center absolute"><HiArrowNarrowLeft onClick={() => {router.push("/")}} className="w-[30px] h-[30px] cursor-pointer hover:fill-slate-300"/></div> 

            <div className="w-2/3 h-full p-8 drop-shadow-2xl">
                <div className="w-full h-16 flex items-center justify-between ">
                    <h1 className="text-3xl text-black font-bold">Нийтлэлүүд</h1>

                    <button onClick={() => setGrid(!grid)} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800">{grid ? "Жагсаалт харах руу шилжих" : "Grid View руу шилжих"}</button>
                </div>
                
                <div className={grid == true ? "grid grid-cols-2 gap-4" : "space-y-4"}>
                    {data.map((things) => (
                        <div key={things.id} className="border-2 border-black rounded-xl p-4 flex flex-col justify-evenly text-black text-xl">
                            <h1 className="font-bold text-2xl mb-3">{things.title}</h1>
                            <h1>{things.text}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}