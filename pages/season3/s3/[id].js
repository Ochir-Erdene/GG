import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { data } from "@/utils/index";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";




export default function ItemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      const found = data.find((product) => String(product.id) === String(id));
      setItem(found);
    }
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="p-4 ">
      <div className="flex">
        <HiArrowNarrowLeft
          onClick={() => router.push("/season3/s3")}
          className="mt-1 w-[20px] h-[20px] fill-black hover:fill-gray-400 cursor-pointer"
        />
        <h1 className="ml-2 text-xl font-bold mb-4">{item.ModelName}</h1>
        <h1 className="absolute ml-7 mt-8 text-gray-400">Пүүз</h1>
        <div className="mt-20 w-[355px] h-[1px] bg-black absolute"></div>
      </div>

      <div className="flex justify-center">
        <img
          src={item.ImageUrl}
          alt={item.name}
          className="w-74 h-74 object-cover mb-4"
        />
      </div>
      <div className="flex">
      <h1 className=" text-2xl font-bold mb-4">{item.ModelName}</h1>
      <h1 className="absolute mt-8 text-gray-400 text-sm">Пүүз</h1>
      </div>
      
      <div className="flex pt-8">
      <p className="text-2xl font-semibold">{item.Price}</p>
      <div className="flex items-center ml-56"><CiHeart className="text-gray-400 scale-150"/></div>
      </div>
      <p className="text-lg mb-2">Brand: {item.BrandName}</p>
      <p className="font-semibold">Пүүз Резмар:</p>
      <div className=" flex mt-4">
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">7</div>
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">7.5</div>
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">8</div>
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">8.5</div>
      <div className="w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">9</div>
      </div>

      <div className=" flex mt-4">
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">9.5</div>
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">10</div>
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">10.5</div>
      <div className="mr-4 w-[60px] h-[40px] border-2 rounded-lg text-xl flex items-center justify-center">11</div>
      </div>

      <div className="mt-6 w-[355px] h-[1px] border-t border-dotted border-black"></div>

      <h1 className="font-semibold mt-4">Төлбөрийн Боломжууд:</h1>
      <div className="flex">
        <img className="mr-4 w-[40px] h-[40px] rounded-lg mt-2" src="https://play-lh.googleusercontent.com/FyBvn04yN5WZIKVjuaRVrwZ0jJaJtOn25un9PLTzc1b6yrPN4-0XiknV1eDrjlX_hQo"/>
        <img className="mr-4 w-[40px] h-[40px] rounded-lg mt-2" src="https://s2.coinmarketcap.com/static/img/coins/200x200/23174.png"/>
        <img className="w-[40px] h-[40px] rounded-lg mt-2" src="https://play-lh.googleusercontent.com/_pIp7VOgD-TomwGiYvzE7YY_N4V-hPcwyRbW0U46bFVFaA_l1lp9oIXRFGPPlsq9aXo=w240-h480-rw"/>
      </div>

      <div className="mt-4 w-[355px] h-[50px] border-2 rounded-lg flex items-center">
       <div className="ml-2 mr-2"><CgNotes className="text-gray-500" style={{ width: "24px", height: "24px" }} /></div>
        <h1 className="font-bold">Бүтээгдэхүүний дэлгэрэнгүй</h1>
        <IoIosArrowForward className="ml-12" style={{width: "24px", height:"24px"}}/>
      </div>

      <div className="mt-4 w-[355px] h-[50px] border-2 rounded-lg flex items-center">
       <div className="ml-2 mr-2"><CiDeliveryTruck className="text-gray-500" style={{ width: "28px", height: "28px" }} /></div>
        <h1 className="font-bold">Хүргэлтийн нөхцөл</h1>
        <IoIosArrowForward className="ml-[115px]" style={{width: "24px", height:"24px"}}/>
      </div>
    </div>
  );
}
