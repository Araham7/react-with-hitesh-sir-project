import { useState } from "react";
import "./App.css";

function App() {

  const [ color , setColor] = useState("gunmetal");

  return (
    // (1). body-container :---
    <div 
    className="w-full h-screen bg-[#2A3439] flex items-center justify-center font-bold" 
    style={{
      backgroundColor: color,
    }}
    >

      {/* (2). Button-Container :--- */}
      <div className=" bg-[#DCDCDC] p-2 inline-block fixed bottom-10 border-4 rounded-3xl">
        {/* (1). RED button */}
        <button className="bg-red-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#ef4444")}
        >
          RED
        </button>

        {/* (2). BLUE button */}
        <button className="bg-blue-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#3b82f6")}
        >
          BLUE
        </button>

        {/* (3). VOILET button */}
        <button className="bg-violet-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#8b5cf6")}
        >
          VOILET
        </button>

        {/* (4). WHITE button */}
        <button className="bg-white py-2 px-4 rounded-[56px] text-[#000000] m-2 border-2 border-black"
        onClick={() => setColor("#ffffff")}
        >
          WHITE
        </button>

        {/* (5). GREEN button */}
        <button className="bg-green-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#22c55e")}
        >
          GREEN
        </button>

        {/* (6). PINK button */}
        <button className="bg-pink-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#ec4899")}
        >
          PINK
        </button>

        {/* (7). PURPLE button */}
        <button className="bg-purple-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#a855f7")}
        >
          PURPLE
        </button>

        {/* (8). YELLOW button */}
        <button className="bg-yellow-500 py-2 px-4 rounded-[56px] text-[#ffffff] m-2 border-2 border-black"
        onClick={() => setColor("#eab308")}
        >
          YELLOW
        </button>

      </div>

    </div>
  );
}

export default App;