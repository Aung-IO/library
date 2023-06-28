import React from "react";
import { useParams } from "react-router";
import bookImg from "../assets/cover.png";
import useFetch from "../hooks/useFetch";

export default function BookDetail() {
  let { id } = useParams();
  let {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      {book && (
        <div className="grid grid-cols-2">
          <div>
            <img src={bookImg} alt="" className="w-[80%]" />
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
      )}
    </>
  );
}
