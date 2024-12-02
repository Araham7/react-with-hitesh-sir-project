import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook :---
  const passwordRef = useRef(null);

  // password-generatr-function :---
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~\"`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [ length , numberAllowed , charAllowed , setPassword ]);

  // copy-password-function :---
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(3, 5); // This will select the password from 3rd index to 4th(i.e, (5-1)th) index.
    window.navigator.clipboard.writeText(password);
  },
[password])

 // useEffect-hook :---
  useEffect(()=>{
    passwordGenerator()
  }, [ length , numberAllowed , charAllowed , passwordGenerator ]);

  return (
    <>
      {/* (1). Main-Logic-Container */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 font-bold ">

        {/* (i). Heading-Generator */}
      <h1 className=" text-4xl text-center text-white p-2">
        Password Generator!
      </h1>

        {/* (2). Password-Display and Copy-button Container */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        {/* (i). Input-box-container */}
        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />
        {/* (ii). Copy-Botton */}
        <button
        onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 active:bg-blue-300 active:text-black">
          Copy
        </button>
        </div>

        {/* (3). range-input , range-length-display , numberAllow-check , charactorAllowed-check Container */}
        <div className="flex text-sm gap-x-2">

          {/* (a). range-input , range-length-display */}
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={0}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
            // onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          {/* (b). input-checkbox-NumberAllowed */}
          <div className="flex items-center gap-x-1" >
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev) => !prev );
            }}
            />
            <label htmlFor="numberInput">
              Numbers
            </label>
          </div>

          {/* (c). input-checkbox-NumberAllowed */}
          <div className="flex items-center gap-x-1" >
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev) => !prev );
            }}
            />
            <label htmlFor="charInput">
              Charactors
            </label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;


