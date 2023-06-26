import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

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

      {book && <h1>{book.title}</h1>}
    </>
  );
}
