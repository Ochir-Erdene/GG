import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-black">
      {/* Header */}
      <div className="flex items-center h-[80px] w-full sticky top-0 z-40 bg-white px-6 sm:px-10 lg:px-28">
      <div className="left-0 ml-12 w-full absolute"><HiArrowNarrowLeft onClick={() => {router.push("/")}} className="w-[30px] h-[30px] cursor-pointer hover:fill-slate-300"/></div> 
        <img
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          className="w-[100px] h-auto sm:w-[130px] sm:h-[55px] object-contain"
          alt="Home"
        />

        <div className="hidden md:flex justify-between ml-auto space-x-6 text-sm lg:text-base">
          <h1>Үйлчилгээ</h1>
          <h1>Давуу тал</h1>
          <h1>Мэдээ</h1>
          <h1>Хамтран ажилах</h1>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-auto md:hidden">
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-sm sticky top-0 z-40">
          <h1>Үйлчилгээ</h1>
          <h1>Давуу тал</h1>
          <h1>Мэдээ</h1>
          <h1>Хамтран ажилах</h1>
        </div>
      )}


      <div className="w-full min-h-screen bg-orange-100 flex flex-col items-center text-center px-4">
        <h1 className="font-medium text-2xl sm:text-3xl pt-20">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...
        </h1>

        <img
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          className="mt-4 max-w-full h-auto"
          alt="Phone"
        />
      </div>

      <div className="w-full bg-orange-100 flex justify-center flex-wrap gap-4 py-8">
        <img
          className="w-[120px] h-[45px]"
          src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png"
          alt="Apple"
        />
        <img
          className="w-[120px] h-[45px]"
          src="https://www.toki.mn/wp-content/uploads/2021/01/android.png"
          alt="Android"
        />
      </div>

      {/* Toki Service */}
      <div className="w-full bg-zinc-50 flex flex-col lg:flex-row items-center px-6 lg:px-24 py-12">
        <img
          className="w-full lg:w-1/2 mb-8 lg:mb-0 mx-auto"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
          alt="Toki Service"
        />
        <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h1 className="text-amber-400 text-3xl sm:text-4xl font-bold pb-4">Toki Service</h1>
          <p>
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх,
            тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос
            хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      {/* Toki Pay */}
      <div className="w-full bg-orange-100 flex flex-col-reverse lg:flex-row items-center px-6 lg:px-24 py-12">
        <div className="lg:w-1/2 text-center lg:text-right">
          <h1 className="text-amber-400 text-3xl sm:text-4xl font-bold pb-4">Toki Pay</h1>
          <p>
            Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны
            картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.
          </p>
        </div>
        <img
          className="w-full lg:w-1/2 mb-8 lg:mb-0 mx-auto"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"
          alt="Toki Pay"
        />
      </div>


      <div className="w-full bg-zinc-50 flex flex-col lg:flex-row items-center px-6 lg:px-24 py-12">
        <img
          className="w-full lg:w-1/2 mb-8 lg:mb-0 mx-auto"
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"
          alt="Toki Shop"
        />
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-amber-400 text-3xl sm:text-4xl font-bold pb-4">Toki Shop</h1>
          <p>
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд
            захиалах боломжтой.
          </p>
        </div>
      </div>

      <div className="w-full bg-white text-center py-24 px-4">
        <h1 className="text-amber-400 text-3xl sm:text-4xl font-bold">
          Toki апп өдөр бүр танд тусална
        </h1>
        <p className="pt-8 max-w-xl mx-auto text-black">
          Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг
          хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
        </p>
        <div className="mt-12">
          <button className="w-[200px] h-[50px] bg-amber-400 text-white font-semibold rounded-full">
            Давуу тал
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[250px] bg-black flex flex-col lg:flex-row justify-between px-[170px] pt-10">
        <img
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          className="w-[100px] h-[40px]"
          alt="Toki"
        />
        <footer className="text-white space-y-6 text-base leading-relaxed">
          <h2 className="cursor-pointer text-stone-300 text-xs hover:text-amber-400">
            Түгээмэл асуулт
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="min-w-5 size-3" />
              <p className="text-stone-300 text-xs">
                Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="min-w-5 size-3" />
              <p className="text-stone-300 text-xs">77074477, 4477</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="min-w-5 size-3" />
              <a
                href="mailto:info@toki.mn"
                className="text-stone-300 text-xs underline-offset-2 hover:underline focus:outline-none"
              >
                info@toki.mn
              </a>
            </div>
          </div>

          <p className="pt-4 text-sm text-stone-300 text-xs">
            Copyright © 2022 | Toki.mn
          </p>
        </footer>

        <div className="text-white space-y-4">
          <h2 className="cursor-pointer text-stone-300 text-xs hover:text-amber-400">
            Нууцлал
          </h2>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.facebook.com/tokiapplication/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#1877F2] text-[30px]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/toki.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#E4405F] text-[30px]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
