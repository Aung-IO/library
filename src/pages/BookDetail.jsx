import React from "react";

import { useParams } from "react-router";
import LoadingAnimation from "../components/LoadingAnimation";
import useTheme from "../hooks/useTheme";

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
            <textarea
              className="bg-gray-50 w-full shadow-md p-3 border-2"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button className="text-white bg-primary px-3 py-2 rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <span className="hidden md:block">Add Note</span>
            </button>

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
