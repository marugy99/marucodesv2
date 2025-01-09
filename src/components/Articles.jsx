import React from "react";
import Article from "./Article.jsx";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function Articles({ items, view = "icon" }) {
  const sortedItems = items.sort(function (a, b) {
    return new Date(b.data.created_at) - new Date(a.data.created_at);
  });

  const [viewType, setViewType] = React.useState(view);
  return (
    <>
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() => setViewType("icon")}
          aria-label="View items as icons"
          aria-current={viewType === "icon"}
          className={
            viewType === "icon"
              ? "p-1 bg-slate-700 rounded-md text-slate-400"
              : "p-1 rounded-md text-slate-500 hover:text-slate-400"
          }
        >
          <Squares2X2Icon className="w-6 h-6" />
        </button>
        <button
          onClick={() => setViewType("list")}
          aria-label="View items as a list"
          aria-current={viewType === "list"}
          className={
            viewType === "list"
              ? "p-1 bg-slate-700 rounded-md text-slate-400"
              : "p-1 rounded-md text-slate-500 hover:text-slate-400"
          }
        >
          <ListBulletIcon className="w-6 h-6" />
        </button>
      </div>
      <div
        className={
          viewType === "icon" ? "flex flex-wrap gap-4 mt-4" : "space-y-2 mt-4"
        }
      >
        {sortedItems.map((item) => (
          <Article
            key={item.data.title}
            link={item.slug}
            data={item.data}
            title={item.data.alternativeTitle ?? item.data.title}
            date={item.data.created_at ?? ""}
            viewType={viewType}
          />
        ))}
      </div>
    </>
  );
}
