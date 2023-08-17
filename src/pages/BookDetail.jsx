import React from "react";

import { useParams } from "react-router";
import LoadingAnimation from "../components/LoadingAnimation";
import useTheme from "../hooks/useTheme";

import NoteForm from "../components/NoteForm";
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

            <div className="border-2 shadow-md p-3 my-3">
              <div className="flex space-x-3">
                <img
                  src="https://media.istockphoto.com/id/1284693553/vector/anonymous-vector-icon-incognito-sign-privacy-concept-human-head-with-glitch-face-personal.jpg?s=612x612&w=0&k=20&c=7rAGNOUEM9B_J3NYPS4j0uYPwZlX0hebFKUhG65b4vI="
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3>Aung Pyae Kyaw</h3>
                  <div className="text-gray-400">8/15/2023</div>
                </div>
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quidem debitis totam mollitia modi ad dolores ut
                architecto natus. Quibusdam fugiat magni excepturi aut esse ex
                minima consequatur eveniet et.
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
