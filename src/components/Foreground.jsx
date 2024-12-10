import React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "./Card";


function Foreground() {
  const ref = useRef(null);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () =>{
        const module = await import("../data");
        setData(module.default);
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        ref={ref}
        className="fixed flex-shrink-0 flex-wrap w-full h-screen z-[3] flex gap-14 p-10"
      >
        {data.map((item, index) => (
          <Card key={item.id} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
