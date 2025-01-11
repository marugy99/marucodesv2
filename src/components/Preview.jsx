import {
  ArrowsPointingOutIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import Draggable from "react-draggable";

export default function Preview({ data, content, backLink }) {
  const [fullScreen, setFullScreen] = React.useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      {fullScreen ? (
        <Draggable handle="#draggableElement" nodeRef={nodeRef}>
          <article
            ref={nodeRef}
            className="container absolute m-4 overflow-hidden text-gray-100 rounded-md shadow-md left-8 top-10 bg-slate-800 shadow-slate-600"
          >
            <div
              className="px-4 py-2 cursor-move bg-slate-700"
              id="draggableElement"
            >
              <button
                onClick={() => setFullScreen(false)}
                aria-label="Close preview"
                className="inline-block p-[2px] rounded-full bg-rose-500"
              >
                <XMarkIcon className="w-4 h-4 text-rose-300"></XMarkIcon>
              </button>
            </div>
            <div className="p-6 pt-3 max-h-[90vh] overflow-y-auto">
              <h1 className="mt-4 text-3xl font-semibold text-center max-w-[65ch]">
                {data.title}
              </h1>
              <p className="mt-2 text-center text-slate-400">
                {new Date(data.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="mx-auto mt-4 prose">{content}</div>
            </div>
          </article>
        </Draggable>
      ) : (
        <article>
          <div className="flex items-center justify-between">
            <a
              href={backLink}
              aria-label="Back"
              className="rounded-md sm:p-1 text-slate-500 hover:text-slate-400 hover:bg-slate-700"
            >
              <ChevronLeftIcon className="w-7 h-7" />
            </a>
            <button
              type="button"
              className="hidden p-1 rounded-md lg:block text-slate-500 hover:text-slate-400 hover:bg-slate-700"
              onClick={() => setFullScreen(true)}
              aria-label="View fullscreen"
            >
              <ArrowsPointingOutIcon className="w-6 h-6" />
            </button>
          </div>
          <h1 className="mt-4 mb-2 text-3xl font-semibold">{data.title}</h1>
          <p className="text-slate-400">
            {new Date(data.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="prose">{content}</div>
        </article>
      )}
    </>
  );
}
