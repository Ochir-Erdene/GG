import { useRouter } from "next/router";
import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

const data = [
    { id: 1, Name: "Blitz", gmail: "blitz@gmail.com" },
    { id: 2, Name: "Senzu", gmail: "senzu@gmail.com" },
    { id: 3, Name: "910", gmail: "910@gmail.com" },
    { id: 4, Name: "Mzinho", gmail: "mzinho@gmail.com" },
    { id: 5, Name: "Techno4K", gmail: "Techno4K@gmail.com" },
    { id: 6, Name: "MaaRaa", gmail: "MaaRaa@gmail.com" }
];

export default function News() {
    const router = useRouter();
    
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
        <div className="h-screen bg-indigo-100">
            <div className="h-auto w-full flex items-center justify-center ">
               <div className="ml-12 w-full absolute"><HiArrowNarrowLeft onClick={() => {router.push("/")}} className="w-[30px] h-[30px] cursor-pointer hover:fill-slate-300"/></div> 
                <h1 className="text-black mt-5 font-bold text-xl mb-3">Хэрэглэгчийн жагсаалт</h1>
            </div>

                    <div className="flex justify-center">
                         <input type="text" placeholder="Search by name..." value={search} onChange={handleSearch}
                         className='w-11/12 rounded-xl shadow-xl p-3'/>



                    </div>

            {/* Display filtered gamers */}
            <div className="mt-5 flex justify-center">
                <div className="w-11/12">{filteredGamers.length > 0 ? (filteredGamers.map((gamer) => (
                            <div className="shadow-xl bg-white rounded-xl p-4 mt-4 flex flex-col  text-black" 
                             key={gamer.id}>
                                <strong>{gamer.Name}</strong>
                                <p>{gamer.gmail}</p>
                            </div>
                        ))) : (
                        <p>Хэрэглэгч олдсонгүй.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
