import { useState } from 'react';

export default function Home(){
    const [count, setCount] = useState(0);
    const darah = () => setCount(count + 1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className="w-full h-screen bg-gray-300 pt-20">
            <div className="w-[1650px] ml-3 h-12 flex items-center justify-center  bg-blue-700">
                <p className="text-white text-xl">Nest high school</p>
            </div>

            <div className="w-full flex flex-col items-center ">
                <h1 className="pt-10 text-5xl font-semibold">Welcome to Nest school</h1>
                <p className="pt-5 text-center w-1/2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</p>
                <div className="flex pt-4">
                    <button onClick={() => {setIsModalOpen(true); darah()}} className="w-[100px] h-[40px] bg-blue-700 text-white rounded-lg  hover:bg-sky-700 ">Click me</button>
                   
                    {isModalOpen==true &&
                       <div className='m-4 absolute w-[110px] h-[100px] bg-white rounded-xl flex items-center  justify-center flex-col'>
                        <h1 className='font-semibold'>Model Title</h1>
                        <p className='text-sm text-gray-700 mb-1'>Clicked: {count} times</p>
                        <button className='w-[53px] h-[25px] bg-red-700 text-white rounded-md' onClick={() => setIsModalOpen(false)}>Close</button>
                       </div>
                    }
                    <p className="pl-3 text-md text-gray-600 ">Clicked {count} times</p>
                </div>
            </div>
        </div>
    );
}