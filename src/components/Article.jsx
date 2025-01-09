import React, { useRef } from "react";
import Draggable from "react-draggable";
import FileIcon from "./FileIcon.jsx";
import { DocumentIcon } from "@heroicons/react/24/solid";

function FileContent({ title }) {
  return (
    <>
      <FileIcon />
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
          handle="#draggableElement"
          onDrag={() => setIsDragging(true)}
          onStop={() => setIsDragging(false)}
        >
          {isDragging ? (
            <div
              id="draggableElement"
              ref={nodeRef}
              href={link}
              className="flex flex-col p-1 w-max"
            >
              <FileContent title={title} />
            </div>
          ) : (
            <a
              id="draggableElement"
              ref={nodeRef}
              href={link}
              aria-label={`Go to ${title}`}
              className="flex flex-col p-1 w-max hover:bg-slate-600 hover:rounded-md"
            >
              <FileContent title={title} />
            </a>
          )}
        </Draggable>
      ) : (
        <a
          href={link}
          aria-label={`Go to ${title}`}
          className="flex flex-col justify-between w-full gap-2 p-2 rounded-md md:items-center md:flex-row bg-slate-700 hover:bg-slate-600"
        >
          <div className="flex items-center gap-2">
            <DocumentIcon className="w-4 h-4" />
            <span className="line-clamp-1">{title}</span>
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
