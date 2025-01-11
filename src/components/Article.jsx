import React, { useRef } from "react";
import Draggable from "react-draggable";
import { DocumentIcon } from "@heroicons/react/24/solid";

function FileContent({ title }) {
  return (
    <>
      <img draggable="false" src="/file-white.svg" alt="File icon"></img>
      <span className="inline-block mt-1 text-sm text-center text-gray-100 sm:text-base max-w-[100px] truncate">
        {title}
      </span>
    </>
  );
}

export default function Article({ link, title, date, viewType = "icon" }) {
  const [isDragging, setIsDragging] = React.useState(false);
  const nodeRef = useRef(null);
  return (
    <>
      {viewType === "icon" ? (
        <Draggable
          nodeRef={nodeRef}
          cancel="#link"
          handle="#draggableElement"
          onDrag={() => setIsDragging(true)}
          onStop={() => setIsDragging(false)}
        >
          <div ref={nodeRef} className="relative group">
            <div aria-label="Move element" className="hidden md:block">
              <span
                id="draggableElement"
                className="absolute hidden w-6 h-6 rounded-full cursor-move bg-slate-900 -top-2 -left-2 place-items-center group-hover:grid"
              >
                <img
                  draggable="false"
                  src="/move-icon.svg"
                  alt="File icon"
                  className="w-4"
                ></img>
              </span>
            </div>
            <a
              href={link}
              aria-label={`Go to ${title}`}
              className={`flex flex-col p-1 w-max group-hover:bg-slate-600 group-hover:rounded-md ${
                isDragging ? "bg-slate-600 rounded-md" : ""
              }`}
            >
              <FileContent title={title} />
            </a>
          </div>
        </Draggable>
      ) : (
        <a
          href={link}
          aria-label={`Go to ${title}`}
          className="flex flex-col justify-between w-full gap-2 p-2 rounded-md md:items-center md:flex-row bg-slate-700 hover:bg-slate-600"
        >
          <div className="flex items-baseline gap-2">
            <DocumentIcon className="w-4 h-4 shrink-0" />
            <span className="line-clamp-2">{title}</span>
          </div>
          {date && (
            <span className="text-sm text-slate-400">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
        </a>
      )}
    </>
  );
}
