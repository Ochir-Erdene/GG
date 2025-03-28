import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter()

    return(
        <div className="w-full h-full bg-slate-500 grid grid-cols-3 p-8 gap-8">
                <button onClick={() => {router.push("/season1/cv")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">CV</button>
                <button onClick={() => {router.push("/season1/weather")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Weather</button>
                <button onClick={() => {router.push("/season1/filter")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Filter</button>
                <button onClick={() => {router.push("/season1/grid")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Grid</button>
                <button onClick={() => {router.push("/season1/bieDaalt")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Bie Daalt</button>
                <button onClick={() => {router.push("/season2/router")}} className="w-[450px] h-[450px] bg-white rounded-3xl hover:bg-blue-100">Season2</button>
        </div>
    );
}