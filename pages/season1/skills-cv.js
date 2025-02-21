import Image from "next/image";
import HTML from '../public/HTML.png'
import CSS from '../public/CSS.png'
import JS from '../public/JS.png'
import CPP from '../public/CPP.png'
import Flutter from '../public/flutter.png'
import Python from '../public/Python.png'
import Line from '../public/line.png'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <nav className="bg-red-950">
      <div className="container mx-auto">
        <div className="sm:flex items-center justify-around">
        <div className="ml-12 w-full  absolute"><HiArrowNarrowLeft onClick={() => {router.push("/")}} className="w-[30px] h-[30px] fill-white hover:fill-slate-300 cursor-pointer"/></div>

          <a onClick={() => {router.push("cv")}} className="text-amber-50 text-3xl font-bold p-3">Ochir-Erdene</a>

          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a onClick={() => {router.push("skills-cv")}} className="p-3 hover:text-white">Skills</a>
            </li>
          </ul>

          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a onClick={() => {router.push("contact-cv")}} className="p-3 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
</nav>

      <div className="flex justify-center">
        <Image className="animate-bounce ml-6 mt-20" src={HTML} width={200} height={150} alt="Picture of the author" object-cover/>
        <Image className="animate-bounce ml-6 mt-20" src={CSS} width={200} height={150} alt="Picture of the author" object-cover/>
        <Image className="animate-bounce ml-6 mt-20" src={JS} width={200} height={200} alt="Picture of the author" object-cover/>
        <Image className="animate-bounce ml-6 mt-20" src={CPP} width={200} height={200} alt="Picture of the author" object-cover/>
        <Image className="animate-bounce ml-6 mt-20" src={Flutter} width={200} height={200} alt="Picture of the author" object-cover/>
        <Image className="animate-bounce ml-6 mt-20" src={Python} width={200} height={200} alt="Picture of the author" object-cover/>
      </div>

      <div >
        <p className="flex justify-center mt-6 font-style: italic text-5xl">Skills</p>
        <div><Image className="mt-5" src={Line}/></div>
<div className="flex justify-center">
        <div className="bg-amber-50 rounded-lg p-5 border-4 w-1/2 mt-10 ml-10 text-2xl">
        <p>Minii 4 jil Nested bolon oorin hucheer ezemshij avsn medleguud.</p>
        </div>
</div> 

        
        
       
      </div>
</div>
);
}
