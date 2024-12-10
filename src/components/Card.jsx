import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "motion/react";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.5 }}
        key={data.id}
        className=" relative w-60 h-72 bg-zinc-700/90 rounded-[40px] text-white px-8 py-10 overflow-x-hidden"
      >
        <FaRegFileAlt />
        <p className="mt-5 leading-tight font-semibold text-sm">{data.desc}</p>

        <div className="footer absolute bottom-0 w-full  left-0">
          <div className="flex items-center justify-between px-8 py-4 mb-3">
            <p>{data.filesize}</p>

            <span className="bg-zinc-800 h-7 w-7 rounded-full flex items-center justify-center text-sm">
              {data.close ? <MdOutlineClose /> : <LuDownload />}
            </span>
          </div>

          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagTitle === "Download Now"
                  ? "bg-green-700"
                  : "bg-sky-400"
              }`}
            >
              <h3 className="font-semibold text-sm flex justify-center items-start">
                {data.tag.tagTitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
