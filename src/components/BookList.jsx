import React from "react";
import { Link } from "react-router-dom";
import book from "../assets/cover.png";
import useFetch from "../hooks/useFetch";

export default function BookList() {
  let { data: books, loading, error } = useFetch("http://localhost:3000/books");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {/* Book List */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((b) => (
           <Link to={`/books/${b.id}`} key={b.id}>
            <div className=" border border-1">
              <img src={book} alt="" />
              <div className="text-center space-y-2 mt-3 ">
                <h1>{b.title}</h1>
                <h1>{b.description}</h1>
              </div>
              {/* categories */}
              <div className="mt-3 mb-2  flex flex-wrap" >
                {b.categories.map((c) => (
                  <span className=" mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500 " key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div></Link>
          ))}
        </div>
      )}
    </div>
  );
}
