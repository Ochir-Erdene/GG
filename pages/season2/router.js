import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();

    return(
        <div className="w-full h-full bg-slate-500 grid grid-cols-3 p-8 gap-8">
                <button onClick={() => {router.push("/")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Season1</button>
                <button onClick={() => {router.push("/season2/week1")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Nest</button>
                <button onClick={() => {router.push("/season2/UltraUseEffect")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">useEffect</button>
                <button onClick={() => {router.push("")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">...</button>
                <button onClick={() => {router.push("")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">...</button>
                <button onClick={() => {router.push("")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">...</button>
        </div>
    );
}