import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import book from "../assets/cover.png";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";
import { AuthContext } from "../contexts/AuthContext";
import useFirestore from "../hooks/useFirestore";
import useTheme from "../hooks/useTheme";

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");

  let { getCollection , deleteDocument} = useFirestore();
  // book -> uid == auth.user.uid
  let {user} = useContext(AuthContext);
  let { error, loading, data: books } = getCollection('books',['uid','==',user.uid]);

  let deleteBook = async(e, id) => {
    e.preventDefault();
   await deleteDocument('books', id);
  };

  if (error) {
    return <p>{error}</p>;
  }

  let { isDark } = useTheme();

  return (
    <div>
      {loading && <p>loading ... </p>}
      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((b) => (
            <Link to={`/books/${b.id}`} key={b.id}>
              <div
                className={`p-4 border border-1 min-h-[420px] ${
                  isDark ? "text-white bg-dcard border-primary" : ""
                }`}
              >
                <img src={book} alt="" />
                <div className="text-center space-y-2 mt-3">
                  <h1>{b.title}</h1>
                  <p>{b.description}</p>
                  {/* genres */}
                  <div className="flex flex-wrap justify-between items-center">
                    <div>
                      {b.categories.map((c) => (
                        <span
                          key={c}
                          className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
                        >
                          {" "}
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Link to={`/edit/${b.id}`}>
                        <img src={edit} alt="" />
                      </Link>
                      <img
                        src={trash}
                        alt=""
                        onClick={(e) => deleteBook(e, b.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {books && !books.length && (
        <p className="text-center text-xl text-gray-500">
          No Search Results Found
        </p>
      )}
    </div>
  );
}
