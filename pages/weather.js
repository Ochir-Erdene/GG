import Image from "next/image";
import Wind from '../public/wind-icon.webp'
import Weather from '../public/weather.png'
import Sun from '../public/sun.png'
import Cloud from '../public/cloud.png'
import Moon from '../public/moon.png'
import Lightning from '../public/lightning.png'
import Raining from '../public/raining.png'
import { useRouter } from "next/router";


export default function Home() {
    const router = useRouter();
    return (
        <div className="w-full h-screen bg-slate-950 grid grid-cols-12 gap-6 p-6 ">
            

                {/* div 1  */}
            <div className="w-full h-full rounded-3xl bg-slate-700 col-span-1 flex flex-col items-center p-4">
                
                <div className="w-12 h-12 rounded-2xl bg-slate-500 flex items-center justify-center cursor-pointer">
                <Image onClick={() => {router.push("/")}} src={Wind} width={35} height={35}/>
                </div>
                <div className="cursor-pointer">
                <Image className="ml-2.5 mt-8 "  src={Weather} width={45} height={45}/>
                <p className="text-slate-300 font-bold">Weather</p>
                </div>

                <div className="flex flex-col items-center mt-8 group cursor-pointer ">
                {/* <Image className="ml-2.5 mt-8" src={List} width={25} height={25}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 487.3 487.3" className="fill-slate-500 group-hover:fill-slate-300">
                    <g>
                        <g>
                            <path d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1    C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1    c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4    s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8    c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z     M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8    C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8    C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7    C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z"/>
                        </g>
                    </g>
                </svg>
                <p className="text-gray-500 ml-0.5 mt-1.5 group-hover:text-slate-300">Cities</p>
                </div>

                <div className="flex flex-col items-center mt-8 group cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="group-hover:fill-slate-300 fill-slate-500 stroke-slate-700" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                    <h1 className="text-gray-500 ml-0.5 mt-1.5 group-hover:text-slate-300">Map</h1>
                </div>

                <div className="flex flex-col items-center mt-8 group cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="group-hover:stroke-slate-300 fill-slate-500 stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                    <h1 className="text-gray-500 ml-0.5 mt-1.5 group-hover:text-slate-300">Settings</h1>
                </div>
            </div>

                {/* div 2 */}
            <div className="w-full col-span-7 grid-rows-3 gap-7">
               <div className="w-full min-h-64 relative">
                    <Image src={Sun} width={200} height={200} className="absolute right-12 top-6"/>
                    <div className="absolute left-0 top-0 p-8">
                        <h1 className="text-slate-300 font-extrabold text-5xl">Ulaanbaatar</h1>
                        <h1 className="mt-2 ml-1 text-slate-500">Chance of snow: 0%</h1>
                        <h1 className="mt-16 text-slate-300 font-extrabold text-7xl">-6°</h1>
                    </div>
              </div>
              
              
              <div className="w-full rounded-xl h-[30%] bg-slate-700 py-6 px-10 relative flex">
              <p className="text-slate-400 font-extrabold absolute top-3 left-8">TODAY'S FORECAST</p>

                <div className="w-full h-5/6 mt-5 grid grid-flow-col">
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-500">
                        <h1 className="text-bold text-slate-400 font-extrabold">6:00 AM</h1>
                        <Image src={Moon}width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-12°</h1>
                    </div>
                </div>

                <div className="w-full h-5/6 mt-5 grid grid-flow-col">
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-500">
                        <h1 className="text-bold text-slate-400 font-extrabold">9:00 AM</h1>
                        <Image src={Cloud}width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-10°</h1>
                    </div>
                </div>

                <div className="w-full h-5/6 mt-5 grid grid-flow-col">
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-500">
                        <h1 className="text-bold text-slate-400 font-extrabold">12:00 PM</h1>
                        <Image src={Sun} width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-3°</h1>
                    </div>
                </div>

                <div className="w-full h-5/6 mt-5 grid grid-flow-col">
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-500">
                        <h1 className="text-bold text-slate-400 font-extrabold">3:00 PM</h1>
                        <Image src={Sun} width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">3°</h1>
                    </div>
                </div>

                <div className="w-full h-5/6 mt-5 grid grid-flow-col">
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-500">
                        <h1 className="text-bold text-slate-400 font-extrabold">6:00 PM</h1>
                        <Image src={Cloud} width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-5°</h1>
                    </div>
                </div>

                <div className="w-full h-5/6 mt-5 grid grid-flow-col">
                    <div className="w-full h-full flex flex-col items-center justify-between">
                        <h1 className="text-bold text-slate-400 font-extrabold">9:00 PM</h1>
                        <Image src={Moon} width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-14°</h1>
                    </div>
                </div>
              </div>

              <div className="w-full rounded-xl h-[30%] bg-slate-700 py-6 px-10 relative mt-7">
                <p className="text-slate-400 font-extrabold absolute top-3 left-8">AIR COONDITIONS</p>
                <button class="w-26 h-6 bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded-full flex items-center justify-center right-8 top-3 absolute">See more</button>

                <div className="w-full h-5/6 mt-8 grid grid-cols-2 grid-rows-2">
                    <div className="w-full h-full flex">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-700 stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                       <div className="ml-3">
                         <p className="text-slate-400 relative">Real Feel</p>
                         <p className="font-extrabold text-3xl text-slate-200 relative">30°</p>
                       </div>
                    </div>

                    <div className="w-full h-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-700 stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
                       <div className="ml-3">
                         <p className="text-slate-400 relative">Wind</p>
                         <p className="font-extrabold text-3xl text-slate-200 relative">0.2 km/h</p>
                       </div>
                    </div>

                    <div className="w-full h-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-700 stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                       <div className="ml-3">
                         <p className="text-slate-400 relative">Chance Of Rain</p>
                         <p className="font-extrabold text-3xl text-slate-200 relative">0%</p>
                       </div>
                    </div>

                    <div className="w-full h-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-700 stroke-slate-500" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                       <div className="ml-3">
                         <p className="text-slate-400 relative">UV Index</p>
                         <p className="font-extrabold text-3xl text-slate-200 relative">3</p>
                       </div>
                    </div>
                </div>
              </div>
            </div>

                  {/* div 3 */}
            <div className="w-full h-full rounded-xl bg-slate-700 col-span-4 p-8 relative">
                <p className="text-slate-400 font-extrabold ">7-DAY FORECAST</p>

                <div className="w-full h-[95%] mt-8 grid grid-rows-7">
                    <div className="w-full h-full border-b border-slate-400 flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Today</p>
                          <Image src={Sun} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Sunny</p>
                          <p className="text-slate-200 ml-20 font-extrabold">36/</p>
                          <p className="text-slate-400 ">22</p>
                       </div>
                    </div>

                    <div className="w-full h-full border-b border-slate-400 flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Tue</p>
                          <Image src={Sun} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Sunny</p>
                          <p className="text-slate-200 ml-20 font-extrabold">37/</p>
                          <p className="text-slate-400 ">21</p>
                       </div>
                    </div>

                    <div className="w-full h-full border-b border-slate-400 flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Wed</p>
                          <Image src={Cloud} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Cloudy</p>
                          <p className="text-slate-200 ml-20 font-extrabold">36/</p>
                          <p className="text-slate-400 ">22</p>
                       </div>
                    </div>
                    
                    <div className="w-full h-full border-b border-slate-400 flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Thu</p>
                          <Image src={Cloud} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Cloudy</p>
                          <p className="text-slate-200 ml-20 font-extrabold">36/</p>
                          <p className="text-slate-400 ">22</p>
                       </div>
                    </div>

                    <div className="w-full h-full border-b border-slate-400 flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Fri</p>
                          <Image src={Sun} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Sunny</p>
                          <p className="text-slate-200 ml-20 font-extrabold">36/</p>
                          <p className="text-slate-400 ">22</p>
                       </div>
                    </div>

                    <div className="w-full h-full border-b border-slate-400 flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Sat</p>
                          <Image src={Raining} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Sunny</p>
                          <p className="text-slate-200 ml-20 font-extrabold">36/</p>
                          <p className="text-slate-400 ">22</p>
                       </div>
                    </div>

                    <div className="w-full h-full flex items-center justify-between">
                       <div className="w-[50%] h-[45%] flex justify-between items-center">
                          <p className="text-slate-400">Sun</p>
                          <Image src={Lightning} width={40} height={10}/>
                       </div>
                       <div className="w-[50%] h-[45%] flex items-center">
                          <p className="text-slate-200 font-extrabold ml-3">Sunny</p>
                          <p className="text-slate-200 ml-20 font-extrabold">36/</p>
                          <p className="text-slate-400 ">22</p>
                       </div>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}