import React from "react";

import { useParams } from "react-router";
import LoadingAnimation from "../components/LoadingAnimation";
import useTheme from "../hooks/useTheme";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import useFirestore from "../hooks/useFirestore";

export default function BookDetail() {
  let { id } = useParams();
  let { getDocument } = useFirestore();
  let { error, loading, data: book } = getDocument("books", id);

  let { isDark } = useTheme();
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <LoadingAnimation />}

      {book && (
        <>
          {/* book content */}
          <div className={`grid grid-cols-2 ${isDark ? "text-white" : ""}`}>
            <div>
              <img src={book.cover} alt="" className="w-[80%]" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{book.title}</h1>
              <div className="space-x-3">
                {book.categories.map((category) => (
                  <span
                    className="bg-blue-500 text-white rounded-full text-sm px-2 py-1"
                    key={category}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p>{book.description}</p>
            </div>
          </div>
          {/* Notes */}
          <div>
            <h3 className="font-bold text-xl text-primary text-center my-3">
              My Notes
            </h3>
            <NoteForm/>

          <NoteList/>
          </div>
        </>
      )}
    </>
  );
}
