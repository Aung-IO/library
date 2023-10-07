import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../hooks/useFirestore";
import useTheme from "../hooks/useTheme";

export default function EditNoteForm({ editNote, setEditNote, type = "idle" }) {
  let [body, setBody] = useState("");
  let { id } = useParams();
  let { updateDocument } = useFirestore();
  let { isDark } = useTheme();

  let updateNote = async (e) => {
    e.preventDefault();
    if (type == "update") {
      editNote.body = body;
      await updateDocument("notes", editNote.id, editNote, false);
      setEditNote(null);
    }
    setBody("");
  };

  useEffect(() => {
    if (type == "update") {
      setBody(editNote.body);
    }
  }, [type]);

  return (
    <div>
      <form onSubmit={updateNote} className="flex flex-col mx-3">
        <div>
          <textarea
            className={`w-full shadow-md p-3 border-2 mt-5 rounded-lg ${
              isDark ? "bg-slate-900 text-white border-none" : ""
            }`}
            name=""
            id=""
            cols="100"
            rows="6"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write a comment..."
          ></textarea>
        </div>

        <div className="flex justify-end mt-3 my-4 space-x-2">
          <button className="text-white bg-primary px-3 py-2 rounded-lg flex items-center gap-2">
            <span className="px-2 py-1">Update</span>
          </button>
          <button
            type="button"
            onClick={() => setEditNote(null)}
            className="text-primary border-2 border-primary px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <span className="px-2 py-1">Cancle</span>
          </button>
        </div>
      </form>
    </div>
  );
}
