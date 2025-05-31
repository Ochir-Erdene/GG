import { useState } from "react";

const data = [
  {
    id: 1,
    image:
      "https://www.istudiobyspvi.com/cdn/shop/files/iPhone_16_Pro_Max_Black_Titanium_PDP_Image_Position_1a_Black_Titanium_Color__TH-TH.jpg?v=1726026671",
    Name: "Phone",
    price: "600$",
    color: "Black",
    items: [{ name: "Case", quantity: "5" }],
  },
  {
    id: 2,
    image:
      "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/m/b/mbp-spacegray-select-202206-removebg-preview_1_.png",
    Name: "MacBook",
    price: "1600$",
    color: "Grey",
    items: [{ name: "Case", quantity: "12" }],
  },
  {
    id: 3,
    image:
      "https://s3.amazonaws.com/ISHOWIMAGES/ROLEX+V7/Rolex+Watches/Rolex+Model+Pages/watch_assets/upright_watches_assets/desktop/m126506-0001_drp-upright-bba-with-shadow.png",
    Name: "Watch",
    price: "6200$",
    color: "Gold, Black",
    items: [{ name: "Glass", quantity: "3" }],
  },
  {
    id: 4,
    image:
      "https://www.xtremeskins.co.uk/cdn/shop/products/airpod_template_84011016-3e05-48f8-bb53-0ed0adfbc52c.jpg?v=1626767890",
    Name: "AirPods",
    price: "150$",
    color: "White",
    items: [{ name: "Case", quantity: "15" }],
  },
  {
    id: 5,
    image:
      "https://southstore-online.com/cdn/shop/files/202300606_3_13d57411-4093-402d-aa4c-e035e56143e9_900x.jpg?v=1701504017",
    Name: "Key Flock",
    price: "105$",
    color: "Black",
    items: [{ name: "Chain", quantity: "21" }],
  },
  {
    id: 6,
    image:
      "https://i5.walmartimages.com/seo/2-1-Detachable-Wallet-Compatible-iPhone-15-Pro-Max-Case-Card-Holder-Faux-Leather-Men-Women-6-7-Kickstand-MagSafe-Black-IP-Max_85065eb3-2445-48aa-8a41-1246b3465e4c.7ffd8ceb3abebe7dd87e6b7a15f0bf03.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    Name: "Card Holder",
    price: "50$",
    color: "Black-White",
    items: [{ name: "Colors", quantity: "4" }],
  },
  {
    id: 7,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/138/182/small_2x/human-liver-and-gallbladder-organ-anatomy-of-internal-organ-illustration-isolated-on-white-background-vector.jpg",
    Name: "Liver",
    price: "813,000$",
    color: "Pink",
    items: [{ quantity: "1" }],
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((item) =>
      item.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="flex">
      <div className="w-[20%] h-screen text-center">
        <img
          className="w-32 mx-auto m-8"
          src="https://nhs.edu.mn/favicon.ico"
          alt="Logo"
        />
        <h1 className="font-semibold">NEST EDUCATION IT SCHOOL</h1>
        <h1 className="text-sm mt-4">Чинбат Очир-Эрдэнэ</h1>
        <h1 className="text-xs">Анги: 11a</h1>
        <button className="w-[220px] mx-auto my-4 h-[50px] bg-blue-600 rounded-lg text-white">
          Go to Lab 2
        </button>
        <button className="w-[220px] mx-auto h-[50px] bg-blue-600 rounded-lg text-white">
          Go to Lab 3
        </button>
      </div>

      <div className="w-[80%] h-screen bg-gray-100">
        <div className="flex m-4 justify-between">
          <div className="flex items-center gap-4">
            <button className="border-2 border-black rounded-lg font-semibold w-[150px] h-[50px] bg-black text-white hover:text-black hover:bg-white transition-all">
              Харилцагчид
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="w-[400px] rounded-xl shadow-xl p-3"
            />
          </div>
          <button className="border-2 border-orange-300 font-semibold rounded-lg w-[150px] h-[50px] bg-orange-300 text-white hover:text-orange-300 hover:bg-white transition-all">
            Бараа Бүртгэх
          </button>
        </div>

        <div className="h-[85%] w-full overflow-y-auto px-5 py-3">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md text-black">
            <thead className="bg-gray-100 text-black text-left">
              <tr>
                <th className="px-4 py-2">Зураг</th>
                <th className="px-4 py-2">Нэр</th>
                <th className="px-4 py-2">Үнэ</th>
                <th className="px-4 py-2">Өнгө</th>
                <th className="px-4 py-2">Эд зүйлс</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500 italic">
                    Item not found
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.Name}
                          className="h-16 w-16 object-contain rounded"
                        />
                      ) : (
                        <span className="text-gray-400 italic">No Image</span>
                      )}
                    </td>
                    <td className="px-4 py-2 font-medium">{item.Name}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2">{item.color}</td>
                    <td className="px-4 py-2">
                      <ul>
                        {item.items?.map((sub, index) => (
                          <li key={index}>
                            {sub.name || "Unknown"} - {sub.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
