import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="absolute w-full top-[5%] py-10 flex justify-center font-semibold text-xl text-zinc-400">
          Documents
        </div>
        <h1 className=" text-zinc-400 font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[200px] leading-none tracking-tighter">
          .Docs
        </h1>
      </div>
    </>
  );
}

export default Background;
