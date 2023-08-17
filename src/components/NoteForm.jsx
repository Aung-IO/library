import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../hooks/useFirestore";
import useTheme from "../hooks/useTheme";

export default function NoteForm() {
  let [body, setBody] = useState("");
  let { id } = useParams();
  let { addCollection } = useFirestore();
  let { isDark } = useTheme();

  let addNote = async (e) => {
    e.preventDefault();
    let data = {
      body,
      bookId: id,
    };
    await addCollection("notes", data);
    setBody("");
  };

  return (
    <div
      className={`flex flex-col border-1 mt-4 rounded-lg min-w-[600px] ${
        isDark ? "bg-dcard" : " bg-slate-50"
      }  `}
    >
      {/* text */}
      <div
        className={`text-center font-bold py-3 ${isDark ? "text-white" : ""}`}
      >
        Share your thoughts here
      </div>
      <div className="flex justify-center mx-4">
        {/* profile */}
        <div>
          <img
            src="https://d27v83ov1up738.cloudfront.net/user-profiles/zZR327gfuRcilZzkHjPyRIam50MpjeUoyVnGpy4W.jpg"
            alt=""
            className="w-12 h-12 rounded-full "
          />
        </div>
        {/* text-area */}
        <div>
          <form onSubmit={addNote} className="flex flex-col mx-3">
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
            <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notify"
                />
                <label
                  className={`form-check-label text-center font-bold mx-2  ${
                    isDark ? "text-white" : ""
                  }`}
                >
                  Subscribe to get a notify
                </label>
              </div>
            <div className="flex justify-end mt-3 my-4">
              <button className="text-white bg-primary px-3 py-2 rounded-lg flex items-center gap-2">
                <span className="px-2 py-1">Post</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
