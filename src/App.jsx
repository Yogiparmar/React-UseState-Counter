import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

  function Increament() {
    setCount((prev) => prev + 1);
  }

  function decreamnet() {
    setCount((prev) => {
      if (prev <= 0) {
        alert("You cannot decreamnet 0")
        return prev;
      }
      return prev - 1;
    });
  }
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-100 flex justify-center items-center text-3xl">
        <div className="w-1/2 h-1/6 bg-white rounded-3xl grid grid-cols-3">
          <div className="w-full flex justify-center border-b bg-red-200 rounded-3xl rounded-tr-none rounded-br-none">
            <button
              className="w-full h-full flex items-center justify-center py-2"
              onClick={decreamnet}
            >
              <FaMinus />
            </button>
          </div>

          <div className="w-full flex justify-center items-center">
            <span>{count}</span>
          </div>

          <div className="w-full flex justify-center border-b bg-red-200 rounded-3xl rounded-tl-none rounded-bl-none">
            <button
              className="w-full h-full flex items-center justify-center py-2"
              onClick={Increament}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
